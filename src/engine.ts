import * as hotFormulaParser from "hot-formula-parser";
import { getReferences } from "./formula";
import * as matrix from "./matrix";
import * as Formula from "./formula";
import { Point } from "./point";
import * as pointGraph from "./point-graph";
import * as pointSet from "./point-set";
import { CellBase } from "./types";
import { isFormulaCell, transformCoordToPoint } from "./util";

type FormulaParseResult = string | boolean | number;
type FormulaParseError = string;
type FormulaComputedValue = FormulaParseResult | FormulaParseError | null;

export class Model<Cell extends CellBase> {
  readonly data!: matrix.Matrix<Cell>;
  readonly evaluatedData!: matrix.Matrix<Cell>;

  // Should only be used within this module
  readonly formulaParser = new hotFormulaParser.Parser();
  readonly referenceGraph!: pointGraph.PointGraph;

  constructor(
    data: matrix.Matrix<Cell>,
    referenceGraph?: pointGraph.PointGraph,
    evaluatedData?: matrix.Matrix<Cell>
  ) {
    this.data = data;
    this.referenceGraph = referenceGraph || createReferenceGraph(data);
    this.evaluatedData =
      evaluatedData ||
      createEvaluatedData(data, this.referenceGraph, this.formulaParser);
    this.formulaParser.on("callCellValue", (cellCoord, done) => {
      let value;
      try {
        const point = transformCoordToPoint(cellCoord);
        value = matrix.get(point, this.evaluatedData);
      } catch (error) {
        console.error(error);
      } finally {
        done(value);
      }
    });
    this.formulaParser.on(
      "callRangeValue",
      (startCellCoord, endCellCoord, done) => {
        let values;
        try {
          const start = transformCoordToPoint(startCellCoord);
          const end = transformCoordToPoint(endCellCoord);
          values = matrix.toArray(matrix.slice(start, end, this.evaluatedData));
        } catch (error) {
          console.error(error);
        } finally {
          done(values);
        }
      }
    );
  }
}

export function updateCellValue<Cell extends CellBase>(
  model: Model<Cell>,
  point: Point,
  cell: Cell
): Model<Cell> {
  const nextData = matrix.set(point, cell, model.data);
  const nextReferenceGraph = isFormulaCell(cell)
    ? updateReferenceGraph(model.referenceGraph, point, cell)
    : model.referenceGraph;

  const nextEvaluatedData = evaluateCell(
    model,
    nextData,
    nextReferenceGraph,
    point,
    cell
  );
  return new Model(nextData, nextReferenceGraph, nextEvaluatedData);
}

function updateReferenceGraph(
  referenceGraph: pointGraph.PointGraph,
  point: Point,
  cell: CellBase<string>
): pointGraph.PointGraph {
  const references = getReferences(cell.value);
  const nextReferenceGraph = pointGraph.set(point, references, referenceGraph);
  return nextReferenceGraph;
}

function evaluateCell<Cell extends CellBase>(
  prevModel: Model<Cell>,
  data: matrix.Matrix<Cell>,
  referenceGraph: pointGraph.PointGraph,
  point: Point,
  cell: Cell,
  evaluatedCells: Set<Point> = new Set<Point>()
): matrix.Matrix<Cell> {
  // Check if the cell is already being evaluated
  if (evaluatedCells.has(point)) {
    // If it is, return the previously evaluated data
    return prevModel.evaluatedData;
  }

  // Mark the cell as being evaluated
  evaluatedCells.add(point);

  // for every formula cell that references the cell re-evaluate (recursive)
  // if the cell is a formula evaluate the formula

  let nextEvaluatedData = prevModel.evaluatedData;
  const referrers = pointGraph.getBackwards(point, referenceGraph);
  for (const referrer of pointSet.toArray(referrers)) {
    nextEvaluatedData = evaluateCell(
      prevModel,
      data,
      referenceGraph,
      referrer,
      cell,
      evaluatedCells
    );
  }
  const evaluatedValue = isFormulaCell(cell)
    ? getFormulaComputedValue({
        cell,
        formulaParser: prevModel.formulaParser,
      })
    : cell.value;
  const evaluatedCell: Cell = { ...cell, value: evaluatedValue };

  nextEvaluatedData = matrix.set<Cell>(point, evaluatedCell, nextEvaluatedData);

  return nextEvaluatedData;
}

/**
 *
 * @param data - the spreadsheet data
 * @returns the spreadsheet reference graph
 */
export function createReferenceGraph(
  data: matrix.Matrix<CellBase>
): pointGraph.PointGraph {
  const entries: Array<[Point, pointSet.PointSet]> = [];
  for (const [point, cell] of matrix.entries(data)) {
    if (cell && isFormulaCell(cell)) {
      const references = getReferences(cell.value);
      entries.push([point, references]);
    }
  }
  return pointGraph.from(entries);
}

export function createEvaluatedData<Cell extends CellBase>(
  data: matrix.Matrix<Cell>,
  referenceGraph: pointGraph.PointGraph,
  formulaParser: hotFormulaParser.Parser
): matrix.Matrix<Cell> {
  // Create a map to store the evaluated values
  const evaluatedValues = new Map<Point, FormulaComputedValue>();

  // Iterate over the points in the reference graph, starting from the leaves
  for (const point of pointGraph.traverseBFS(referenceGraph)) {
    // Get the cell at the current point in the data matrix
    const cell = matrix.get(point, data);
    if (!cell) {
      continue;
    }

    // If the cell is a formula cell, evaluate it
    if (isFormulaCell(cell)) {
      const evaluatedValue = getFormulaComputedValue({
        cell,
        formulaParser,
      });
      // Store the evaluated value in the map
      evaluatedValues.set(point, evaluatedValue);
    }
  }

  // Return a new matrix with the evaluated values
  return matrix.map(<T>(cell: T, point: Point) => {
    const evaluatedValue = evaluatedValues.get(point);
    if (evaluatedValue) {
      return { ...cell, value: evaluatedValue };
    }
    return cell;
  }, data);
}

/** Get the computed value of a formula cell */
export function getFormulaComputedValue({
  cell,
  formulaParser,
}: {
  cell: CellBase<string>;
  formulaParser: hotFormulaParser.Parser;
}): FormulaComputedValue {
  const formula = Formula.extractFormula(cell.value);
  const { result, error } = formulaParser.parse(formula);
  return error || result.value;
}

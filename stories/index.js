import React, { Component, Fragment } from "react";
import { storiesOf } from "@storybook/react";
import Spreadsheet from "../src/SpreadsheetStateProvider";
import * as Matrix from "../src/matrix";
import { range } from "../src/util";
import "./index.css";

const INITIAL_ROWS = 20;
const INITIAL_COLUMNS = 26;

const initialData = range(INITIAL_ROWS).map(() => Array(INITIAL_COLUMNS));

const RangeInput = ({ cell, getValue }) => (
  <span>
    0
    <input
      type="range"
      value={getValue({ data: cell })}
      min={0}
      max={100}
      disabled
      style={{ pointerEvents: "none" }}
    />
    100
  </span>
);

initialData[4][5] = { value: 0, DataViewer: RangeInput };
initialData[5][6] = { value: 0, component: RangeInput };

class App extends Component {
  state = {
    data: initialData
  };

  handleChange = data => {
    this.setState({ data });
  };

  addColumn = () => {
    this.setState(({ data }) => {
      return {
        data: data.map(row => {
          const nextRow = [...row];
          nextRow.length += 1;
          return nextRow;
        })
      };
    });
  };

  addRow = () => {
    this.setState(({ data }) => {
      const { columns } = Matrix.getSize(data);
      return { data: [...data, Array(columns)] };
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.addColumn}>Add column</button>
        <button onClick={this.addRow}>Add row</button>
        <Spreadsheet data={this.state.data} onChange={this.handleChange} />
      </Fragment>
    );
  }
}

storiesOf("Spreadsheet", Spreadsheet).add("Spreadsheet", () => <App />);

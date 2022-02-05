"use strict";(self.webpackChunkreact_spreadsheet=self.webpackChunkreact_spreadsheet||[]).push([[827],{2622:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={id:"usage",title:"Usage"},c="Usage",l={unversionedId:"usage",id:"usage",title:"Usage",description:"Simple",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-spreadsheet/docs/usage",editUrl:"https://github.com/iddan/react-spreadsheet/tree/master/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"sidebar",previous:{title:"Get Started",permalink:"/react-spreadsheet/docs/"},next:{title:"Exports",permalink:"/react-spreadsheet/docs/api/"}},p=[{value:"Simple",id:"simple",children:[],level:2},{value:"Controlled",id:"controlled",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h2",{id:"simple"},"Simple"),(0,o.kt)("p",null,"The Spreadsheet component requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property: an array of arrays with objects that has the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," key. Changes made in the Spreadsheet will not affect the passed data array as in React props values should not be mutated."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," prop value is changed the component will discard any changes made by the user. If you want to make changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and incorporate the user's changes see ",(0,o.kt)("a",{parentName:"p",href:"#Controlled"},"Controlled"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const data = [\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ];\n  return <Spreadsheet data={data} />;\n};\n')),(0,o.kt)("h2",{id:"controlled"},"Controlled"),(0,o.kt)("p",null,"The Spreadsheet component accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," prop that is called every time one of the Spreadsheet's cell is changed by the user. You can use it to save the modified data and to react to changes (e.g. validating the modified data, further modify it, persist it)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const [data, setData] = useState([\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ]);\n  return <Spreadsheet data={data} onChange={setData} />;\n};\n')))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
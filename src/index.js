import React from "react";
import ReactDOM from "react-dom";

import App  from "./App";
import "./index.css";

//we render this App module here 
//components in react are functions of javascript that returns actually html or xml elements
//React components must start with a capital letter
//why we import React? The reason is we are creating components and
// in JS compatiable code its something like React.createelement . So we need to import React.
ReactDOM.render(<App />, document.querySelector("#root"));

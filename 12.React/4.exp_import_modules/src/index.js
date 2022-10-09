import React from 'react';
import ReactDOM from 'react-dom';
import pi, {doublePi, triplePi} from "./math.js";  //we can use other name such as pie, var1 instead of pi
// import * from "./math.js"; // this a wild code and it runs as the previous one


ReactDOM.render(
  <ul>
    <li> {pi} </li>
    <li> {doublePi()} </li>
    <li> {triplePi()} </li>
  </ul>,
  document.getElementById("root")

);
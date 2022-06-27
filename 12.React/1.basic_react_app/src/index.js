//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";


//It should display a h1 heading.

const fname = "Malcon";
const lname = "Ten"
const lucky = 7;
const currentDate = new Date();
const year= currentDate.getFullYear();

class App extends React.Component {
  render() {
    return (
  <div>
      <h1>{year}</h1>
      <h1> Hello1 {fname} {lname}</h1>
      <h2> Hello2 {fname + " "+lname}</h2>
      <ul>
      <li> product1 {lucky} </li>
      <li className="heading" contentEditable="true"> product2 </li>
      <li> product3 </li> 
      </ul>

      <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
      <p>The magic number {10+3}</p>

  </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
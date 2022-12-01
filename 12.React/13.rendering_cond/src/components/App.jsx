import React from "react";
import Login from "./Login";

var istrue = false;


function App() {
  return <div className="container" >
      {
        istrue === true ?  <h1> Hello there</h1> : <Login />
      }
    </div>;
}

export default App;


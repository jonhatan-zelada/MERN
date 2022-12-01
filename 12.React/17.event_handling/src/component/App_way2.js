import React, { useState } from "react";



function App() {
 /* Defining the default value of "headingText"*/
  const [headingText, setheadingText] = useState("Hi")

  /* Set value for "headingText", it is when the functin is called by button*/
  function handleClick (){
   setheadingText("Submitted");
    // alert("All right")
  }

  /* Defining the default value of "ButtonColor"*/
  const [isMouseOver, setMouseOver] = useState("white")

//const [ButtonColor, setButtonColor] = useState("green")

  /* Set value for "ButtonColor"*/
  function handleMouseOver(){
    setMouseOver("black")
    //alert("MOuse Over the buttom")
  } 

  function handleMouseOut(){
    setMouseOver("white")
  } 

  return (
    <div className="container">
      <h1>{headingText}</h1>      
      <input type="text" placeholder="Wahts yor name?"/>
      <button 
          style={{backgroundColor:isMouseOver}} 
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}       
       >
        Submit</button>
    </div>
  );
}

export default App;

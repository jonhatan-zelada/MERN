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
  const [isMouseOver, setMouseOver] = useState(false)

  /* Set value for "ButtonColor"*/
  function handleMouseOver(){
    setMouseOver(true)
    //alert("MOuse Over the buttom")
  } 

  function handleMouseOut(){
    setMouseOver(false)
  } 

  return (
    <div className="container">
      <h1>{headingText}</h1>      
      <input type="text" placeholder="Wahts yor name?"/>
      <button 
          style={{backgroundColor:isMouseOver?"black":"white"}} 
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}       
       >
        Submit</button>
    </div>
  );
}

export default App;

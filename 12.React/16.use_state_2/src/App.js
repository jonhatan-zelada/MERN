import React, { useState } from "react";

function App() {

  //Comment the following line to turn the clock as manual
  setInterval(getTime,1000);

  const [tiempo,setTiempo]= useState(0);

  function getTime(){
    let time = new Date().toLocaleTimeString();
  //alert(time);
    setTiempo(time)
  }

  return (
<div className="container">
  <h1> {tiempo}</h1>
  <button onClick={getTime}> Get time</button>
</div>

  );
}

export default App;

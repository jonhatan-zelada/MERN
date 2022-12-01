import React, { useState } from "react";

function App() {

  const [name, setName] = useState("")

 function change (){
 alert("My name is   "+name)
  //setName(event.target.value)
 }


  return (
  <form onSubmit={change}> 
    <div className="container">
      <h1>Hello</h1>
      <input
         type="text"
         placeholder="What's your name?" 
         name="name"
         value={name}
         onChange={(e)=>setName(e.target.value)} 
      />
      <button type="submit"> Submit</button>
     
    </div>
  </form>
  );
}

export default App;


import React, { useState } from "react";

function App() {

  const [name, setName] = useState("")

 function Change (event){
  setName(event.target.value)
 }

 const [heading, setHeading]=useState("")

 function handleClick(event){
  setHeading(name);
  //Prevent the refresh of the page, to look what happens just commnet the next line
  event.preventDefault();
 }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}> 
        <input
          type="text"
          placeholder="What's your name?" 
          value={name}
          onChange={Change} 
        />
      <button type="submit"> Submit</button>
    </form>
     
  </div>

  );
}

export default App;


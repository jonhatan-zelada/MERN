import React, { useState } from "react";

function App() {


    const [name,setName] = useState("")
    const [lname,setlName] = useState("")

    return (
    <div className="container">
      <h1>Hello {name} {lname}</h1>
      <form>
        <input 
            name="fName"
            placeholder="First Name" 
            onChange={(e)=>setName(e.target.value)}
        />
        
        <input 
            name="lName"
            placeholder="Last Name" 
            onChange={(e)=>setlName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


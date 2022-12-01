import React from "react";
import Login from "./Login";


var UserIsRegister = false;


function App() {
  return (
      <div className="container" >
      
        <Login 
        isRegistered={UserIsRegister}
        />
       </div>
      )
}

export default App;


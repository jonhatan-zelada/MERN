import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//Chargind the data from contacts into CArd elements
function createCard(contacts){
  return (
   
    <Card 
      name={contacts.name} 
      image= {contacts.imgURL}
      tel= {contacts.phone}
      mail={contacts.email}
    
    />

  )

}



function App(prop) {
  return(
    <div>
       <h1>My Contacts</h1>

      {contacts.map(createCard)}
    </div>

  )

}


export default App;

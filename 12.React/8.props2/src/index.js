import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts"

ReactDOM.render(

    <div>
    <h1>My Contacts</h1>
    <App 
        name = {contacts[0].name}
        image= {contacts[0].imgURL}
        tel= {contacts[0].phone}
        mail={contacts[0].email}
    />


    <App 
        name = {contacts[1].name}
        image= {contacts[1].imgURL}
        tel= {contacts[1].phone}
        mail={contacts[1].email}
    />


    <App 
        name = {contacts[2].name}
        image= {contacts[2].imgURL}
        tel= {contacts[2].phone}
        mail={contacts[2].email}
    />
    </div>


, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

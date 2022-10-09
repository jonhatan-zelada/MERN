import React from "react";
import ReactDOM from "react-dom";


function Card(prop){
  return(
    <div className="div-style">
        <h2>{prop.name}</h2>
        <img src={prop.image}   alt="avatar_img"  />
        <p>{prop.tel}</p>
        <p>{prop.mail}</p>
    </div>
 
  );


}


ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
    name = "The artist"
    image= "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789"
    mail="b@gmail.com"
    />

  <Card
    name = "the actor"
    image= "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    tel="+222544789"
    mail="actor@gmail.com"
    />

  <Card
    name = "martial artist"
    image= "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel="+88869789"
    mail="martial@gmail.com"
    />

  </div>,
  document.getElementById("root")
);

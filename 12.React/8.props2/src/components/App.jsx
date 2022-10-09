import React from "react";


function App(prop) {
  return(

      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img className="circle-img"
            src={prop.image}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{prop.tel}</p>
          <p className="info">{prop.mail}</p>
        </div>
      </div>


  )

}


export default App;

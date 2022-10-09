import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";


function createCard(emojiItem){
  return (
    <Card 
    key= {emojiItem.id}
    emoji= {emojiItem.emoji}
    name = {emojiItem.name}
    meaning= {emojiItem.meaning}
    />
  );

}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
     
      </dl>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



/** Create a function for adding data*/
function addNotes(item){
  return(
  <Note 
    key={item.key} 
    title={item.title}
    content={item.content}
  />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(addNotes)}
      <Footer />
    </div>
  );
}

export default App;

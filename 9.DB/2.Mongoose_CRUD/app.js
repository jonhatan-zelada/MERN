const mongoose = require("mongoose");

// Connection URI
mongoose.connect("mongodb://localhost:27017/peopleDB",{useNewUrlParser: true});

//* FILM */
// Create a Squema
const filmSchema = new mongoose.Schema({
    name : String,
    type : String    
})
//Models are fancy constructors compiled from Schema definitions.
//mongoose.model("nameOfCollection",Schemma to use) 
const Film = mongoose.model("Film", filmSchema);
//INsert one record
const goodfather = new Film({
    name: "Goodfather",
    type: "Soup Opera" 
});
 goodfather.save();


//* PEOPLE */
// Create a Squema
const peopleSchema = new mongoose.Schema({
    name: {
       type: String,
       // to prevent not inserting this field
       //required: true //simplest way
       required: [true, "Why not inserting the name"] //advance way
      }, 
    age: {
       type: Number,
       min: 1,
       max:100
      },
    rol: String
});

//Models are fancy constructors compiled from Schema definitions. 
const People = mongoose.model("People", peopleSchema);

//INsert Many
const people= new People({
     name: "Sandro",
     age: 32,
     rol: "TA",
     favouriteFilm: goodfather 
  });
people.save();
const mongoose = require("mongoose");

// Connection URI
mongoose.connect("mongodb://localhost:27017/peopleDB",{useNewUrlParser: true});


// Create a Squema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rol: String
});

//Models are fancy constructors compiled from Schema definitions. 
const People = mongoose.model("People", peopleSchema);

//INsert Many
People.insertMany([
      { name: "Pedro", age: 23, rol: "BI Dev" },
      { name: "MAtias", age: 53, rol: "TA" },
      { name: "PEdro", age: 44, rol: "Teacher" }
   ],function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Sucessfully save all");
    }
  });
 
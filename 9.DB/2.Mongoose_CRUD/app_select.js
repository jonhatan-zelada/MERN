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

  
/* // Select All the peoples collection
People.find(function(err,peoples){
  if (err) {
      console.log(err);
  } else {
      console.log(peoples);
  }
});
 */

// Select one column peoples collection
People.find(function(err,peoples){  //people is the collection of People Model
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        peoples.forEach(function(people){
            console.log(people.name);
        })
        
    }
  });
  
  
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

  

// Delete one column peoples collection https://mongoosejs.com/docs/models.html#deleting
People.deleteMany({name: "Pedro"},function(err){
    if (err) {
        console.log(err);
    } else {
         console.log("Sucessfully deleted all duplicated");
    }
  });
  
  
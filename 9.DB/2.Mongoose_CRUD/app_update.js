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

  

// Select one column peoples collection
People.updateOne({_id:"626305a57c78f03adf1ebc9e"},{name:"Antonio"},function(err){
    if (err) {
        console.log(err);
    } else {
         console.log("Sucessfully updated the document");
    }
  });
  
  
const mongoose = require("mongoose");

// Connection URI
mongoose.connect("mongodb://localhost:27017/peopleDB",{useNewUrlParser: true});


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
People.insertMany([
      { age: 23, rol: "BI Dev" },
      { name: "Mirian", age: 53, rol: "TA" },
      { name: "Lucy", age: 44, rol: "Teacher" }
   ],function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Sucessfully save all");
    }
  });

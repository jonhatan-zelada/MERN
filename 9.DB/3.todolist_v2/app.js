//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set express object
const app = express();
//Setting the ejs
app.set('view engine', 'ejs');

//1.Requisite to catch info of form, but prior to instal "npm i body-parser"
app.use(bodyParser.urlencoded({extended: true}));
//** set the location of static files */
app.use(express.static("public"));

// Connect Database
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});

// Create a Squema
const itemsSchemma= new mongoose.Schema({
name: String
});
//mongoose.model("nameOfCollection",Schemma to use) 
const Item = mongoose.model("Item",itemsSchemma);

//Creating documents
const item1 = new Item ({
  name: "go shopping"
});

const item2 = new Item ({
  name: "go running"
});

const item3 = new Item ({
  name: "go sleep"
});

const defaultItems = [item1,item2, item3];



//**Catching the inicial "/" route */
app.get("/", function(req, res) {
//select
  Item.find({},function(err,foundItems){
  
    if (foundItems.length===0){
      //INsert Many
      Item.insertMany(defaultItems,function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Sucessfully save all items");
        }
        }); 
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }  
  
  });

});

//**Catching data from forms */
app.post("/", function(req, res){

  const itemName = req.body.newItem;
   const item = new Item({
     name: itemName
   });
   item.save();
   res.redirect("/");

});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;

  Item.findByIdAndRemove(checkedItemId,function(err){
    if (!err) {
         console.log("Sucessfully deleted");
         res.redirect("/");

    }
  });

});


app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

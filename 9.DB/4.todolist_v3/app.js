//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

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

//** Create a ItemSquema*/ 
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


//** Create a listSquema*/ 
const listSquema = {
  name: String,
  items: [itemsSchemma]
};
//MOdel from Collection named "List"
const List=mongoose.model("List", listSquema);

//**Catching the inicial "/" route */
app.get("/", function(req, res) {
//select
  Item.find({},function(err,foundItems){  //founItem is the collection of Item Model
  
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


//Route parameters
app.get("/:customListName", function(req,res){
    const customListName = _.capitalize(req.params.customListName); // catching the parameter of url

// To avoid duplicating the list
    List.findOne({name:customListName}, function(err,foundList){  //foundList is the result of the searching
      if (!err) {
        if (!foundList){
          //Create a new List
          const list = new List({
            name: customListName,
            items: defaultItems
          });
          list.save(); // save into the list collentions
          res.redirect("/"+customListName);

        } else {
          //Show the existing List
          res.render("list", {listTitle:foundList.name , newListItems: foundList.items});    
        } 
      }
    });
});

//**ADDING ITEMS */
app.post("/", function(req, res){
  //atching data from forms
  const itemName = req.body.newItem;
  const listName = req.body.list;

   const item = new Item({
     name: itemName    // Asign the name caught in form to the 
   });

   if (listName === "Today"){
    item.save();
    res.redirect("/");
   } else {
      List.findOne({name:listName},function(err,foundList){ 
        foundList.items.push(item);
        foundList.save();
        res.redirect("/"+ listName);
      });
   }
});

//**DELETING ITEMS */
app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
  } else {
     List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err){
        res.redirect("/" + listName);
      }
    });
  }
});


app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

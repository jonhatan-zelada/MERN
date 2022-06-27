const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const request = require("request");
const date= require(__dirname+"/date.js");//import a module called "date.js"


console.log(date);


const app = express();
//WOrking with Global variables to avoid scope problem
let items = ["Doctor appointment","Do exercise"]; 

let workItems = [];

//Setting the ejs
app.set("view engine","ejs");

//1.Requisite to catch info of form, but prior to instal "npm i body-parser"
app.use(bodyParser.urlencoded({extended: true}));

//** set the location of static files */
app.use(express.static("public"));

//**Catching the inicial "/" route */
app.get("/", function(req,res){
    let day = date.getDay();
    //** send both variables "day" and "newItem" */
    res.render("list",{listTitle:day,newListItems: items});
});

//**Catching data from forms */
app.post("/",function(req,res){
    let item= req.body.task;
    //console.log("new task "+task);
    
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
         //acrued items with push
        items.push(item);
        res.redirect("/");
    }

});


app.get("/work", function(req,res){
    res.render("list",{listTitle: "work list",newListItems:workItems});
});

app.get("/about", function (req,res) {
    res.render("about");
  });

app.listen(3000, function(){
    console.log("server started on port 3000");
});
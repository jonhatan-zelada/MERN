const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req,res){
    var today = new Date();
    if (today.getDay() ===7 || today.getDay() === 0){
        res.write("<h1>It's weekend</h1>");
        res.write("<h2>time to enjoy</h2>");
        res.send();
    } else {
        res.sendFile(__dirname+"/index.html");
    }
    
    
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
const express = require("express");
const app = express();

app.get("/", function(request,response){
    response.send("<h1>Hello, this is a response on express</h1>");
});


app.get("/contact", function(req, res){
    res.send("Mail me to jonh@gmail.com");
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});



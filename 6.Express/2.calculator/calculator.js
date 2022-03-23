//** imṕort libraries */
const express=require("express");
const bodyParser = require("body-parser");

//create app 
const app = express();
//enable body parser to use form data
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){
    console.log("server started on port 3000");
});

//**Simple Calculator */
//Go to index.html when in url is localhost:3000/
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
    //console.log(__dirname);//This give the directory where the code of my app is
});

//Now show the result after pushing the button of <form action="/" method="post">
app.post("/", function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is"+result);
});



//**BMI Calculator*/
//Go to bmiCalculator.html when in url is localhost:3000/bmicalculator
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

//Now show the result after pushing the button of <form action="/bmicalculator" method="post">
app.post("/bmicalculator", function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi= weight / (height*height);
    res.send("BMI is"+bmi);
});
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");//this is necessary to catch info of form

const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
 })


//this is necessary to catch info of form, but prior to instal "npm i body-parser"
app.use(bodyParser.urlencoded({extended: true}));


app.post("/", function(req,res){
        
        const city= req.body.city_name; //data got from forms
        const key= "742878cc156776fb6910b6746700d647";
        const unit="metric";
        const url ="https://api.openweathermap.org/data/2.5/weather?q="+city+ "&appid="+key+"&unit="+unit;  
    
   
        https.get(url,function(response){
            console.log(response.statusCode);
    
        response.on("data", function(data){
            //getting data
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(temp);
            const weatherDescription= weatherData.weather[0].description;
            console.log(weatherDescription);
    
            //NOw sending data accumulating two writes
            res.write("<p>the weather " +weatherDescription+"</p>");
            res.write("<h1>the temperature in London is  " + temp+"  degrees celcius</h1>");
            res.send();
        })
    })
      //Only must be one send methos, that is why delete the second one
     //res.send("Server is up and running");
    

})




 app.listen(3000, function(){
    console.log("This server started form port 3000");
}) 
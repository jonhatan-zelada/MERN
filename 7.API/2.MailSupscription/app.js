const express =require("express"); 
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");
const { get } = require("request");
//const { get } = require("http");

const app=express();


//Setting the route to static files
app.use(express.static("public"))
//1.Requisite to catch info of form, but prior to instal "npm i body-parser"
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

//**Catching data from forms */
//Cath data form input

app.post ("/", function(req,res){
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const email=req.body.email;
    //console.log(first_name,last_name,email);

    const data = {
        members: [
            {
            email_adress: email,
            status: "subscribed",
            merge_fields:{
                FNAME:  first_name,
                LNAME: last_name
            }
        }
      ]
    }

    const jsonDATA = JSON.stringify(data);
/* API Key
a845ea6e6186156c59c69d6fa24cd238-us14 */

//Audience ID: 8613b0fa2f

    const url= "https://us14.api.mailchimp.com/3.0/lists/8613b0fa2f";

    const options = {
        method: "POST",
        auth: "jonh1:a845ea6e6186156c59c69d6fa24cd238-us14"
    }
    //create a new constant call request to avoid conflict wit "req" previously deifned
    const request=https.request(url, options, function(response){
        if (response.statusCode === 200){
            //res.send("Successfully subscribed");
            res.sendFile(__dirname+"/success.html");

        } else {
            //res.send("there was an error with signing up");
            res.sendFile(__dirname+"/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
      });

    request.write(jsonDATA);
    request.end();

});


app.post("/fail", function(req,res){
       res.sendFile(__dirname+"/signup.html"); 
});

app.listen(3000,function(){
    console.log("this server run from port 3000");

});





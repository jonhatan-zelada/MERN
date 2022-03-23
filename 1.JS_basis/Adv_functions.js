
/** HIGHER ORDER FUNCTION **/
function add(num1, num2){
    return num1+num2;
}

function multiply (num1,num2){
    return num1*num2;
}
function substract (num1,num2){
    return num1-num2;
}

function cociente(num1,num2){
    return num1/num2;
}

function calculator (num1,num2,operator)
{
    return operator(num1,num2);
}

calculator(4,2,cociente);

/** h */
function Worker (name, age, licence, languages){ 
    this.name = name;
    this.age = age;
    this.licence = licence;
    this.languages = languages;
}

var worker1 = new Worker("Luis", 34, "A32323",["Russian","English"]);

//FUNCTION
function HouseKeeper (yearOfExperience, name, cleaninRepertoire){
    this.yearOfExperience= yearOfExperience;
    this.name=name;
    this.cleaninRepertoire=cleaninRepertoire;
    this.clean= function(){
        alert("Cleaning in progess");
    }
    
    }
    
    var houseKeeper1 = new HouseKeeper(12, "Jose",["kitchen","dinerroom"]);// instance the function
    houseKeeper1.clean(); // call the function
    houseKeeper1.cleaninRepertoire[0]; // call a method


    /** CALLBACK FUNCTION  example 1*/
    //go to wikipedia and search for javascript
    $0.addEventListener("click",function(event){ console.log(event);});// look result in message window

    //example2
    function sayhi(to){console.log("hello, "+to);}
    sayhi("Jonh");


    /** CALLBACK FUNCTION  example 2*/
    function anotherAddEventLIstener(typeofevent, callback) {
        //
        var eventthathappened = {
            eventType: "keypress",
            key: "p",
            durationOfkeypress: 2
        }
        if (eventthathappened.eventType===typeofevent){
            callback(eventthathappened);
        }
    } 

    anotherAddEventLIstener("keypress",function(event){console.log(event);});

    //Similar to the previous one to capture the key captured
    document.addEventListener("keypress", function(event){console.log(event);});
    //after that press any key and look at the console

//Create array
var peoplelist= ["josé","Edu","Julio","Inti"];
console.log(peoplelist);
console.log(peoplelist.length);
console.log(peoplelist[1]);

//Look for elements
peoplelist.includes("Julio");

//Adding elements
peoplelist.push("Santi")
console.log(peoplelist);

//Remove the last element
peoplelist.pop();
console.log(peoplelist);

//Challenge1
var output = [];
    var n=1;
function fizzBuzz(){
output.push(n);
    n++;
    console.log(output);

}

fizzBuzz(); // call this after clean the previous code

//Challenge2: Fizzbuzz challenge

var output = [];
    var n=1;
function fizzBuzz(){

    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz");
    
    } else if (n % 3 === 0){
        output.push("Fizz");
       
    } else if (n % 5 === 0) {
        output.push("Buzz");
        
    } 
    else {
        output.push(n)

    }
    console.log(output);
    n++;
  }
fizzBuzz(); // call this after clean the previous code


// challenge 3: who is buying lunch

function whosPaying(names) {
    
    /******Don't change the code above*******/
    var list_names= ["Joe","José","Edu","Julio","Inti"];
    
    var ran_number=Math.random();
    position=Math.floor(ran_number*list_names.length)+1;

    console.log(list_names[position]+ "  in going to pay the lunch");
      
            
    /******Don't change the code below*******/    
    }

// WHILE

var i=1;
while(i<2){
    console.log(i);
    i++;
}

// Boost the Fizzbuzz challenge
var output = [];
var n=1;

function fizzBuzz(){
while (n<100)
  {
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz");
    
    } else if (n % 3 === 0){
        output.push("Fizz");
       
    } else if (n % 5 === 0) {
        output.push("Buzz");
        
    } 
    else {
        output.push(n);
    }
    n++;
  }
  console.log(output);
}
fizzBuzz();


// FOR
var output = [];
for (var i=1; i<2; i++) {
    console.log(i);
}

// fizz buzz witn for
var output = [];
function fizzBuzz(){
    for (var n = 1; n<101; n++)
      {
        if (n % 3 === 0 && n % 5 === 0) {
            output.push("FizzBuzz");
        
        } else if (n % 3 === 0){
            output.push("Fizz");
           
        } else if (n % 5 === 0) {
            output.push("Buzz");
            
        } 
        else {
            output.push(n);
        }
      
      }
      console.log(output);
    }
fizzBuzz();



// CHARACTERS

// 1.1.Length
var cant= prompt("INgresa tu mensaje");
var count=140-cant.length;
alert("You have written"+cant.length+" characteres. It is left "+count+" characteres");

// Slice
var message="Hello World";
var name="Jonh";

message.slice(0,1); // looking the first character
message.slice(3,4);

// Practice 1: a tweet text box that cut the characters in 140 position
var text1= prompt("Insert your tweet message");
var chunk_under140= text1.slice(0,139);
alert("this is a 140 characteres chunk of your message:   "+chunk_under140);

//shorter version of Practice 1
alert(prompt("Insert your tweet message").slice(0,139));

// How to improve my english which  by far is better but it is not enough to get a 7 and I stat to get anxious asdasdas dasda da dasda dasda d

//ToUppercase
var fruit_name= "Apple";
fruit_name.toUpperCase();
fruit_name.toLowerCase();
    //look at the the firt value of the variable
    fruit_name

//Practice 2:
 var text2=prompt("Insert you name");
 chunk0=text2.slice(0,1);
 chunk0_Upper=chunk0.toUpperCase();

 n=text2.length; //catching the lengh of the name
 chunk1_n=text2.slice(1,n);
 chunk1_n_lower=chunk1_n.toLowerCase(); // to prevent that the rest of characters have uppercase
 alert("Hello: "+chunk0_Upper+chunk1_n_lower);

 // NUMBERS

 //dOG AGE TO HUMAN AGE
var dogAge= prompt("insert the age of your dog");
human_age=(dogAge-2)*4+21;
alert("the human age of your dog is:   "+ human_age)

//increment and decrement
var age=5;
age++;
age--;
// other way of incement or decrement
var m=5;
m+=1;
m-=1;

// dependent of variables
var m = 5;
var n = 2;
m-=n;

// Dividing
var num = 12;
num /=3;
// module
var m=12%4;

// s
var x=3;
var y=x++; //The value of x is assigned to y before x is incremented, so y equals 3
y+=1;

// Function that give you your age in terms of weeks
var years1=prompt("Insert your age in years")

lifeInWeeks(years1);

function lifeInWeeks(age){
    weeks=age*52
    console.log("You have:  "+ weeks+ "weeks")
}
// Function that give you how much days, weeks and months you  left if you live until 90 years
var years1=prompt("Insert your age in years")

lifeInWeeks(years1);

function lifeInWeeks(age) {
 console.log("You have:  "+(52*7*(90-age))+ " days   " + (52*(90-age))+ "  weeks  "+ (12*(90-age)) + "  months left");

}

// // Function that give you back your the return of your buyings trainers

var payment=prompt("The cost of the bottle is 25, Insert the value of your notes")

return_paymennt(payment);

function return_paymennt(value) {
value=payment-25;
 return value;
}

alert("");

// NUmber of bottle that I can buy when I have $"money" to pay for them

function getMilk (money){
    var n_bottles=money/2; // every bottle cost $2
    return Math.floor(n_bottles);
}

getMilk(5);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/
function bmi(weight,height){
    var result= weight/(Math.pow(height,2)); // Math.pow(height,2)==height*height
    return  Math.round(result);
}

bmi(71,1.2);

// Random number generation
var n=Math.random();
console.log(n);

// Rolling the dice
var n=Math.random();
n=Math.floor(n*6)+1;
console.log(n);

// Challenge Love calculator
var woman=prompt("insert woman name");
var man=prompt("insert man name");

var love_index=Math.random();
m=Math.floor(love_index*100)+1;
console.log("Hey "+man+ "  and " +woman+ " you both has a love index of  "+m+"%");

// If statement basic
var woman=prompt("insert woman name");
var man=prompt("insert man name");

var love_index=Math.random();
m=Math.floor(love_index*100)+1;

if (love_index>0.7){
  alert("your love_index is "+ love_index + "  So you really fall in love")
} else {
  alert ("ypur love_index is "+ love_index + "  you love is tranquil" )
}
// If statement 
var woman=prompt("insert woman name");
var man=prompt("insert man name");

var love_index=Math.random();
m=Math.floor(love_index*100)+1;

if (love_index>0.7){
  alert("your love_index is "+ love_index + "  So you really fall in love")
} 
if (love_index<=0.7 && love_index>=0.3 ) {
  alert ("your love_index is "+ love_index + "  you love is huge" )
}
if (love_index<0.3) {
    alert ("your love_index is "+ love_index + "  you love is tranquil" )
  }

  // Challenge BMI with if else
  function bmi(weight,height){
    var result= weight/(Math.pow(height,2)); // Math.pow(height,2)==height*height
    return  Math.round(result);
}

bmi(71,1.2);
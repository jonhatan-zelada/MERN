var numbers = [2,5,62,7,25,24];

//-------Map-------
///--Way1: JS vanilla
var newNumbers= [];
numbers.forEach(function (x) {
  newNumbers.push(x+50);
});
console.log(newNumbers);


///--Way2-- React -separate function
function sumarize(a){
  return a+5;
}

const sum= numbers.map(sumarize);

console.log(sum);

///--Way3: React Unified function

const sum2=numbers.map(function sumarize(a){
  return a+a;
})
console.log(sum2);
///--Way4: React witn arrow function

const sum3=numbers.map(a=>{return a+10})

console.log(sum3);

//-------FILTER-------

///--Way1 --vamilla JS
var filteredNumber2=[];
numbers.forEach(function(num1){
  if (num1>10)
   filteredNumber2.push(num1);
})
console.log(filteredNumber2);



///--Way2 -- React Unified function
const filteredNumber= numbers.filter(function(num){
    return num>10;
})
console.log(filteredNumber);


///--Way3 --  React witn arrow function
const filteredNumber3=numbers.filter((num3)=>{return num3>30})
console.log(filteredNumber3);


//-------REDUCE: accumulate values-------

///-----Way1 -- Vanilla JS
var acum_numbers=0; // NOw We need a number instead of an array

numbers.forEach(function (r1){
   acum_numbers+=r1;
});
console.log(acum_numbers);

///--Way2 -React 
const result=numbers.reduce(function(acum_numbers1,r2){
  return acum_numbers1+=r2;
})
console.log(result);

//-------FIND:Find the first item that matches from an array-------

///--Way1
const find_number=numbers.find(function(r3){
    return r3>10;
})
console.log(find_number);


///--Way2




//-------FindIndex: find the index of the first item that matches from an array--------

///--Way1
const find_index = numbers.findIndex(function(r4){
  return r4>3;
})
alert(find_index);

///--Way2

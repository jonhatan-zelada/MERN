import emojipedia from "./emojipedia";


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

///--Way3 --  React witn arrow function
const result2=numbers.reduce((acum_numbers2,r3)=>{return acum_numbers2+=r3})
console.log(result2);


//-------FIND:Find the first item that matches from an array-------

///--Way1
const find_number=numbers.find(function(f1){
    return f1>10;
})
console.log(find_number);


///--Way2
const find_number1=numbers.find(f2=> f2>10);
console.log(find_number1);


//-------FindIndex: find the index of the first item that matches from an array--------

///--Way1
const find_index = numbers.findIndex(function(fi1){
  return fi1>3;
})
console.log(find_index);


///--Way2--  React witn arrow function
const find_index1 = numbers.findIndex(fi2=>fi2>3)
//alert(find_index1);
console.log(find_index1);


////Emojidepdia
const emoji1= emojipedia.map(function(emo1){
  return emo1.meaning.substring(0,100);
});
console.log(emoji1);

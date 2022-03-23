var randomNumber1=Math.random();
randomNumber1= Math.floor(randomNumber1*6)+1;

var randomNumber2=Math.random();
randomNumber2= Math.floor(randomNumber2*6)+1;

//Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png 
document.querySelector(".img1").setAttribute("src",'images/dice'+randomNumber1+'.png');

document.querySelector(".img2").setAttribute("src",'images/dice'+randomNumber2+'.png');

function winner(number1, number2){
    if (randomNumber1>randomNumber2)
     var result="Winner 1 wins"
    else if (randomNumber1<randomNumber2)
    var result="Winner 2 wins"
    else 
    var result= "Draw!"

    return result;
}

var message_result= winner(randomNumber1,randomNumber2);

document.querySelector("h1").innerHTML=message_result;
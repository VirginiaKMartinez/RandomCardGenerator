const number= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const symbol=["\u2665","\u2666","\u2663","\u2660"];

function numberRandom  (myArray){
    let numRandom = Math.floor(Math.random() * (myArray.length));
    return numRandom;
}

let symbolA = symbol[numberRandom(symbol)];
if(symbolA=="\u2665" || symbolA=="\u2666"){
    document.querySelector(".symbolUp").style.color="red";
    document.querySelector(".symbolDown").style.color="red";
    document.querySelector(".symbolCenter").style.color="red";
}

else{
    document.querySelector(".symbolUp").style.color="black";
    document.querySelector(".symbolDown").style.color="black";
}

document.querySelector(".symbolUp").innerHTML= symbolA;
document.querySelector(".symbolDown").innerHTML= symbolA;
document.querySelector(".symbolCenter").innerHTML=number[numberRandom(number)];
console.log(symbolA);






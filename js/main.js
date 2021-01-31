"use strict";
//exercise 1

function get100Numbers() {
  var numbers = [];
  for (let i = 1; i < 101; i++) {
    numbers.push(i)
  }
  return numbers;
}

console.log(get100Numbers())

//exercise 2

function getReversed100Numbers() {
    return get100Numbers().reverse()
}

console.log(getReversed100Numbers())

//exercise 3
const lostNumbers = [4, 8, 15, 16, 23, 42];

//even numbers:
const evenNumbers = []; // he puesto fuera de la funcion para poder usar el resultado en la concatenacion. 

function evenLostNumbers (){
    
    for(let i = 0; i < lostNumbers.length; i++){
        if(lostNumbers[i] % 2 === 0){
         evenNumbers.push(lostNumbers[i]); 
        }
    }
    return evenNumbers;
}
console.log(evenLostNumbers());
//multiple 3 numbers:
const multNumbers = []; // he puesto fuera de la funcion para poder usar el resultado en la concatenacion. 

function multLostNumbers (){
    
    for(let i = 0; i < lostNumbers.length; i++){
        if(lostNumbers[i] % 3 === 0){
         multNumbers.push(lostNumbers[i]); 
        }
    }
    return multNumbers;
}
console.log(multLostNumbers ());

// concat:
let numbersConcat = evenNumbers.concat(multNumbers);
console.log(numbersConcat);




//alternative:
/*
function extractNumbersMultipleOf(mult){
    const multNumbers = [];
    
    for(let i = 0; i < lostNumbers.length; i++){
        if(lostNumbers[i] % mult === 0){
         multNumbers.push(lostNumbers[i]); 
        }
    }
    return multNumbers;
}

function concatResultOfNumbersMultiple(evenNumbers, multiple3Numbers){
    return evenNumbers.concat(multiple3Numbers);
}


console.log(concatResultOfNumbersMultiple(extractNumbersMultipleOf(2), extractNumbersMultipleOf(3)));
*/
"use strict";
//exercise 1

function get100NUmbers(numbers) {
  var numbers = [];
  for (let i = 1; i < 101; i++) {
    numbers.push(i)
  }
  return numbers;
}

console.log(get100NUmbers())
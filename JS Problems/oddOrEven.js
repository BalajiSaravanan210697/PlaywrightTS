/* Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even. */

function isOddOrEven(number) {
  let result;
  if (number <= 1) return false;
  if (number % 2 === 0) {
    result = "The Given number is Even Number";
  } else {
    result = "The Given number is Odd Number";
  }
  return result;
}

let inputNumber = 78;
console.log(isOddOrEven(inputNumber));

/* Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type.  */

function numberType(number) {
  let result;

  if (number > 0) {
    result = "given number is positive";
  } else if (number < 0) {
    result = "given number is negative";
  } else {
    result = "given number is zero";
  }
  return result;
}

let number = -34;
console.log(numberType(number));

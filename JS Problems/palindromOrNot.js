/* Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
palindrome, then test your function with various strings and print the results. */

function reverseString(str) {
  let splitedArray = str.split("");
  let reversed = "";
  for (let i = splitedArray.length - 1; i >= 0; i--) {
    reversed += splitedArray[i];
  }
  return reversed;
}

function isPalindromeOrNot() {
  let string = "welcome";
  console.log("reversed String is : " + reverseString(string));

  if (reverseString(string) === string) {
    console.log("given string is palindrome : " + string);
    return true;
  } else {
    console.log("given string is not palindrome : " + string);
    return false;
  }
}

isPalindromeOrNot();

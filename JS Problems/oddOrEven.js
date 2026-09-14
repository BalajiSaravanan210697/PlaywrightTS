/* Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even. */

function isOddOrEven(number){ 
    if(number <= 1) return false
    if(number%2===0){
        return true
    }
    return false
}

let inputNumber=78
let result=isOddOrEven(inputNumber)
if(result===true){
    console.log("Given number is Even Number : "+inputNumber);    
}
else{
    console.log("Given number is odd Number : "+inputNumber);
    
}
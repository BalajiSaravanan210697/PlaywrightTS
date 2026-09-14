//Print the number between 1-50 divide by 5
let resultArray = [];
function dividedByFive() {
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

console.log("numbers divded by 5 is :" +dividedByFive());

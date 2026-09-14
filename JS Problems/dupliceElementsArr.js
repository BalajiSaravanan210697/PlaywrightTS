/* Write the JS program to print duplicates in an array.
let num=[56,78,90,23,90,76,43,56] */

function dupliateElementsFromArray(nums) {
  let duplicateElements = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        duplicateElements.push(nums[i]);
      }
    }
  }
  return duplicateElements;
}
let duplicateElementArray = dupliateElementsFromArray([56, 78, 90, 23, 90, 76, 43, 56,]);
console.log(duplicateElementArray);

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    let maxVal;
    if (!numbers.length){
        return maxVal;
    }

    maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++){
        maxVal = Math.max(maxVal, numbers[i]);
    }
    return maxVal;
}

module.exports = findLargestElement;
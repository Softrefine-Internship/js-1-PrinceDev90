// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

import { selectionSort } from "./selection-sort-package/index.js";

// case - 1
function mergeArray(arr1, arr2) {
  console.log([...arr1, ...arr2].sort());
}

mergeArray([3, 5, 1], [4, 2]);

const arr1 = [3, 5, 1];
const arr2 = [4, 2];

const merge = arr1.concat(arr2);
console.log(selectionSort(merge));

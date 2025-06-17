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

// =================================================================

const arr1 = [3, 5, 1];
const arr2 = [4, 2];

const merge = arr1.concat(arr2);
console.log(selectionSort(merge));

// ======================================================================

// case - 3
function mergeAndSortArrays(arr1, arr2) {
  let merged = [];
  let i;

  for (i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
  }

  for (i = 0; i < arr2.length; i++) {
    merged[merged.length] = arr2[i];
  }

  return merged;
}

// Test it
var arr1_ = [3, 5, 1];
var arr2_ = [4, 2];
var result = mergeAndSortArrays(arr1_, arr2_);

console.log(selectionSort(result)); // [1, 2, 3, 4, 5]

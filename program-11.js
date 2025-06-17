// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

import { selectionSort } from "./selection-sort-package/index.js";

function unionArrays(arr1, arr2) {
  // Step 1: Merge both arrays manually

  let merged = [];
  let i;
  for (i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
  }
  for (i = 0; i < arr2.length; i++) {
    merged[merged.length] = arr2[i];
  }

  // Remove duplicates manually
  let unique = [];
  let isDuplicate;
  for (i = 0; i < merged.length; i++) {
    isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (merged[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique[unique.length] = merged[i];
    }
  }

  return unique;
}

// Sample input
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

// Expected Output: [1, 2, 3, 10, 100]
let result = unionArrays(arr1, arr2);
console.log(selectionSort(result));

function secondWay(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

const arr11 = [1, 2, 3];
const arr22 = [100, 2, 1, 10];

const result1 = secondWay(arr11, arr22);
console.log(result1);

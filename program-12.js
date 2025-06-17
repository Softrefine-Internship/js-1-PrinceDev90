// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

function arrayDifferenceManual(arr1, arr2) {
  let result = [];

  // Find items in arr1 not in arr2
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result[result.length] = arr1[i];
    }
  }

  // Find items in arr2 not in arr1
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

const case1 = arrayDifferenceManual([1, 2, 3], [100, 2, 1, 10]);
console.log(case1);

function arrayDifferenceOptimized(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff1 = arr1.filter((item) => !set2.has(item));
  const diff2 = arr2.filter((item) => !set1.has(item));

  return diff1.concat(diff2);
}

const case2 = arrayDifferenceOptimized([1, 2, 3], [100, 2, 1, 10]);
console.log(case2);

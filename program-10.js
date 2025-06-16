// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const val1 = arr1[i] || 0;
    const val2 = arr2[i] || 0;

    result.push(val1 + val2);
  }

  return result;
}

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

const output = sumArrays(arr1, arr2);
console.log(output); // [4, 5, 8, 10, 12, 13]

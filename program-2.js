// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

const complexArray = [1, 2, 3, [4, 6, [10, 34, 67, 89]]];
let flatAry = [];

function callForIterate(ary) {
  for (let i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      callForIterate(ary[i]); // Recursively flatten
    } else {
      flatAry.push(ary[i]); // Push non-array element
    }
  }
}

callForIterate(complexArray);

console.log("flat ary:", flatAry);


// using the built in function 
const complexArray1 = [1, 2, 3, [4, 6, [10, 34, 67, 89]]];
const flatAry1 = complexArray1.flat(Infinity);

console.log("flat ary:", flatAry1);

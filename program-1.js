// Write a JavaScript program to clone an array.
"use strict";

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// case - 1
const case1 = sample.map((ele, i) => {
  return ele;
});

// case - 2
const case2 = [...sample]; // not for sub array

// case - 3
const case3 = sample; //pass the reference 


// dynamic program for cloning the array

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

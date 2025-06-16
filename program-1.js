// Write a JavaScript program to clone an array.
"use strict";

const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// case - 1
const case1 = sample.map((ele, i) => {
  return ele;
});


// case - 2
const case2 = [...sample];

// case - 3
const case3 = sample;

console.log();
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function insertDashes(num) {
  const digits = num.toString().split("");
  const result = [digits[0]];

  for (let i = 1; i < digits.length; i++) {
    const prev = parseInt(digits[i - 1]);
    const curr = parseInt(digits[i]);

    if (prev % 2 === 0 && curr % 2 === 0) {
      result.push("-", digits[i]);
    } else {
      result.push(digits[i]);
    }
  }

  return result.join("");
}

console.log(insertDashes("025468")); // "0-254-6-8"
console.log(insertDashes(24680)); // "2-4-6-8-0"
console.log(insertDashes(13579)); // "13579" (no even pairs)

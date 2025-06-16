/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let leftEmpty = i === 0 || flowerbed[i - 1] === 0;

      let rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (leftEmpty && rightEmpty) {
        flowerbed[i] = 1; // Plant the flower
        count++; // Increase our planted count

        if (count >= n) {
          return true;
        }
      }
    }
  }

  // Check if we planted enough flowers
  return count >= n;
}

// Test examples
console.log("Example 1:");
console.log("Input: flowerbed = [1,0,0,0,1], n = 1");
console.log("Output:", canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true

console.log("\nExample 2:");
console.log("Input: flowerbed = [1,0,0,0,1], n = 2");
console.log("Output:", canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false

// Additional test cases
console.log("\nMore examples:");
console.log(
  "canPlaceFlowers([0,0,1,0,0], 1):",
  canPlaceFlowers([0, 0, 1, 0, 0], 1)
); // true
console.log("canPlaceFlowers([0], 1):", canPlaceFlowers([0], 1)); // true
console.log("canPlaceFlowers([1], 1):", canPlaceFlowers([1], 1)); // false

// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

function findMostFrequent(arr) {
  let mostItem = arr[0];
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostItem = arr[i];
    }
  }

  console.log(mostItem, `"${maxCount} times"`);
}

const sample = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
findMostFrequent(sample); // Output: a "5 times"

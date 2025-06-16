// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

function mergeAndRemoveDuplicates(arr1, arr2) {
  const merged = [];
  const all = [...arr1, ...arr2];

  for (let i = 0; i < all.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < merged.length; j++) {
      if (all[i] === merged[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      merged.push(all[i]);
    }
  }

  return merged;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];

const result = mergeAndRemoveDuplicates(arr1, arr2);
console.log(result); // [1, 2, 3, 4, 5, 6, 7]

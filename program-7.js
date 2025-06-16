// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

function removeDuplicateObjects(array) {
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    let exists = false;

    for (let j = 0; j < unique.length; j++) {
      if (
        array[i].title === unique[j].title &&
        array[i].author === unique[j].author
      ) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      unique.push(array[i]);
    }
  }

  return unique;
}

const array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" }, // duplicate
];

const result = removeDuplicateObjects(array);
console.log(result);

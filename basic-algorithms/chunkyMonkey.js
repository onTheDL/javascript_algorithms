/*
INSTRUCTIONS
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunkArr = arr.slice(i, i + size);
    result.push(chunkArr);
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
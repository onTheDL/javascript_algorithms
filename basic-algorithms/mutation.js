/*
INSTRUCTIONS
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation([item1, item2]) {
  const item1Arr = item1.toLowerCase().split('');
  const item2Arr = item2.toLowerCase().split('');

  for (let item of item2Arr) {
    if (item1Arr.indexOf(item) === -1) {
      return false;
    }  
  }
 
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Alien", "line"])); 
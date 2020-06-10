/*
INSTRUCTIONS
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let strToArr = str.split(' ')
  let resultArr = [];
  for (let word of strToArr) {
    let capitalizedWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalizedWord += word[0].toUpperCase()
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
    resultArr.push(capitalizedWord);
  }
  return resultArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

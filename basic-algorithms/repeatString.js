/*
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    return str.repeat(num);
  }
}
*/

//WITHOUT USING REPEAT()
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } 
  let repeatStr = '';
  for (let i = 0; i < num; i++) {
    repeatStr += str;
  }
  return repeatStr;
  
}


console.log(repeatStringNumTimes("abc", 3));
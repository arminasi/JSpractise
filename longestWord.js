//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(str) {
  const strArr = str.split(" ");
  let prev = strArr[0];
  strArr.forEach((word) => {
    if (prev.length < word.length) {
      prev = word;
    }
  });
  return prev;
}

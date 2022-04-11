//Write a function which will remove all repeated items of array.

function removeRepeats(arr) {
  const filtered = [];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  map.forEach((_, i) => {
    filtered.push(i);
  });
  return filtered;
}

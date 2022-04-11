//Return the sum of all arguments passed to function.

function sumOfArgs(...args) {
  let total = 1;
  args.forEach((item) => {
    total *= item;
  });
  return total;
}

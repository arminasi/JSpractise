//Reduce method implementation

Array.prototype.fakeReduce = function (cb, init) {
  let total = init || this[0];
  for (let i = 1; i < this.length; i++) {
    total = cb(total, this[i]);
  }
  return total;
};

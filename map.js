//Map method implementation

Array.prototype.fakeMap = function (cb) {
  const newArr = [];
  for (let i = 1; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

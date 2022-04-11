//Let’s say we have an object with linked props

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const arr = [];

function lookUp(obj) {
  if (obj.next === null) {
    return;
  }
  arr.push(obj.value);
  return lookUp(obj.next);
}

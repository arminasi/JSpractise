/*Write a JS function, which will work as a calculator.
It will accept 3 arguments, first number, second number and the sign
*/

function calcTwoNum(a, b, x) {
  switch (x) {
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
      return a + b;
    case "-":
      return a - b;
    default: {
      return 0;
    }
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return ++n;
}
function decrement(n) {
  return --n;
}

function makeInt(n) {
  if (n != parseInt) {
    n = parseInt(n, 10);
    return n;
  } else if (n == NaN) {
    return NaN;
  }
}
function preserveDecimal(n) {
  if (n != parseFloat) {
    n = parseFloat(n);
    return n;
  } else if (n == NaN) {
    return NaN;
  } else {
    return n;
  }
}

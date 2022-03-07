function number(num, callback) {
  if (typeof callback === 'function') {
    return callback(num);
  } else {
    return num;
  }
}

//number functions 0-9
function zero(callback) {
  return number(0, callback);
}

function one(callback) {
  return number(1, callback);
}

function two(callback) {
  return number(2, callback);
}

function three(callback) {
  return number(3, callback);
}

function four(callback) {
  return number(4, callback);
}

function five(callback) {
  return number(5, callback);
}

function six(callback) {
  return number(6, callback);
}

function seven(callback) {
  return number(7, callback);
}

function eight(callback) {
  return number(8, callback);
}

function nine(callback) {
  return number(9, callback);
}

//operations
function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
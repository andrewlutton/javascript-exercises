const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  for (i of numArray) {
    sum += i;
  }
  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  for (i of numArray) {
    product *= i;
  }
  return product;
};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
	let result = 1;
  if (num == 0) {
    result = 1;
  } else {
    for(num; num > 1; num--) {
      result *=num;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

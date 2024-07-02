function valueOfTest(value, callback) {
  if (callback(value)) return "Value passed the test";
  else return "Value did not pass the test";
}

const isPositive = (value) => value > 0;

console.log(valueOfTest(5, isPositive));
console.log(valueOfTest(-5, isPositive));

function createGreeter(greating) {
  return function (name) {
    return `${greating} ${name}!`;
  };
}

const greetName = createGreeter("Hello");
console.log(greetName("John")); // Hello John!

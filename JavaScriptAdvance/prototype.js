function Person(name) {
  this.name = name;
}

Person.prototype.gretting = function () {
  console.log(`Hello ${this.name}!`);
};

const person1 = new Person("John");

person1.gretting();

console.log(person1.__proto__ === Person.prototype);

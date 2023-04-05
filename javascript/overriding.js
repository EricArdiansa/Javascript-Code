class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person1 = new Person("John", 30);
console.log(person1.getInfo()); // Output: Name: John, Age: 30

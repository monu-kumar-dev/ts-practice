export {};

class Person {
  name: string;
  age: number;

  constructor(n1: string, n2: number) {
    this.name = n1;
    this.age = n2;
  }
}

const obj = new Person("Rohit", 20);
const obj1 = new Person("Ankit", 21);
console.log(obj);
console.log(obj1);

export {};

class Person {
  name: string;
  age: number;

  constructor(n1: string, n2: number) {
    this.name = n1;
    this.age = n2;
  }
  greet(): void {
    console.log(`hi ${this.name}`);
  }
}

const obj = new Person("Rohit", 20);
const obj1 = new Person("Ankit", 21);
console.log(obj);
console.log(obj1);
obj.greet();

// +++++++ public private protected +++++++++++++++++++

class Customer {
  public name: string;
  private age: number;
  protected balance: number;

  constructor(name: string, age: number, balance: number) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }
  greet(): number {
    this.age = this.age + 10;
    return this.age;
  }
}

const p1 = new Customer("Ankit", 20, 10);
console.log(p1);
console.log(p1.name);
// console.log(p1.age); // error
// console.log(p1.balance); // error

class Employee extends Customer {
  salary: number;

  constructor(salary: number, name: string, age: number, balance: number) {
    super(name, age, balance);
    this.salary = salary;
  }
  meet(): void {
    // console.log(this.age); // error
    console.log(this.balance);
  }
  greet(): number {
    console.log("Hello Coder Army");
    return 10;
  }
}

const E1 = new Employee(420, "Monu", 20, 210);
console.log(E1);
console.log(E1.meet());
console.log(E1.greet()); 

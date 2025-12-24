"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
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
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    greet() {
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
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    meet() {
        // console.log(this.age); // error
        console.log(this.balance);
    }
    greet() {
        console.log("Hello Coder Army");
        return 10;
    }
}
const E1 = new Employee(420, "Monu", 20, 210);
console.log(E1);
console.log(E1.meet());
console.log(E1.greet());
// ++++++ generic: Template +++++++++++++
// function value(
//   a: number | string | number[] | boolean
// ): number | string | number[] | boolean {
//   return a;
// }
// short for line 68 to 73:-->
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Monu"));
console.log(value([10, 11, 12, 13]));
console.log(true);
console.log(value(["Monu", "Mohit", "Mohan"]));
const obj10 = {
    name: "Rohit",
    age: 20,
    aadhar: 123,
    salary: 60000,
};
const obj11 = {
    name: "Rohit",
    age: 20,
    aadhar: "KPK9876",
    salary: 60000,
};

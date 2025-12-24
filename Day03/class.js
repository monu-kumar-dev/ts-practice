"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
const obj = new Person("Rohit", 20);
const obj1 = new Person("Ankit", 21);
console.log(obj);
console.log(obj1);

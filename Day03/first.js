"use strict";
// const num:number = 10;   // error
// why:->
// 🔥 REAL REASON (Most Common) :->
// 👉 Tumhari file module nahi hai
// TypeScript me agar file module nahi hoti, to:
// Us file ke variables global scope me chale jaate hain
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    aadhar: 1234,
};
// Partial :-> isme hm sb value ko de bhi skte hai ya chhor bhi skte hai
// const obj2: Partial<customer> = {
//   name: "Rohit",
//   balance: 210,
// };
//Required:-> isme sb value ko denaa hai nhi to error
// const obj2: Required<customer> = {
//   name: "Rohit",
//   balance: 210,
//   age: 23,
// };
// Readonly:-> isme hm kewal read kr skte hai value ko change nhi kr skte, aur isme sb value dena hai
const obj2 = {
    name: "Rohit",
    balance: 210,
    age: 23,
};
// obj2.name = "Mohit"; // error
// ++++ Array of objects +++++++++
const arr = [
    { name: "Rohit", age: 20 },
    { name: "Monu", age: 21 },
];
const arr2 = [
    { name: "Rohit", age: 20 },
    { name: "Monu", age: 21 },
];
// +++++++++ Function in TS ++++++++
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Monu", 12);
// default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Bittu");
// Optional parameter
function Gate(person) {
    console.log(person || "Mohan");
}
Gate("Rohit");
Gate();
// arrow function :--->
const sum = (a, b) => {
    return a + b;
};
console.log(sum(6, 5));
// callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
function placeOrder2(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder2(10, (amount) => {
    console.log(amount);
});
// rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => {
        ans = ans + val;
    });
    console.log(ans);
}
total(2, 3, 4, 4, 3, 2, 4, 6);
const obj5 = {
    name: "santosh",
    age: 32,
    salary: "30k",
    id: 1432,
};

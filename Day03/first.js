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

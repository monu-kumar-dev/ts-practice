let num: number = 10;
// num = "Rohit"; // error

let x = 20; // why donot show error
// x = "Monu"; // here show error

// note:--> In typescript agr hm type ko declare nhi krte hai, aur value de dete hai jaisa ki line 4 me hai waha error nhi aata kyuki wo automatically jo value rahta hai uska type ko le leta hai.
// Note:--> Line 5 me error aa raha hai kyuki line 4 me wo automaticaaly type ko number le liya tha ab mai usme string value de raha hu.

let val = "Monu";
// val = 10; // error (line 10 determine auto string)

// +++++ Dangerous Zone ++++++++++
// any vs unknown :---->
// +++++++++ any +++++++++
// 1️⃣ Why money becomes any ❓
let money;
money = "Monu";
money = 20;

// ❓ Question
// Hover karne par money: any kyu dikh raha hai?

// ✅ Answer (Simple)
// Tumne type define hi nahi ki
// TypeScript bola:
// 👉 “Mujhe type nahi pata, main ise any maan leta hoon”

// 📌 Rule:-->
// Variable without type + without initial value → any

// 🚨 Why any is dangerous?
// let money;
// money = "Monu";
// money = 20;

// money.toUpperCase(); // ❌ Runtime error possible
// money();             // ❌ Allowed

// 📌 TypeScript koi error nahi deta, bilkul JavaScript jaisa ho jata hai.

// ✅ Safe Way
// let money: number;
// money = 20;
// money = "Monu"; // ❌ Error

// ++++++++++ unknown ++++++++++

// 2️⃣ unknown (Safe Version of any) 🛡️
let val2: unknown;
val2 = 20;
val2 = "Rohit";

// ❓ Why this is better?
// unknown allows any value
// BUT ❌ direct use not allowed

// 🚫 This is NOT allowed
// val2.toUpperCase(); // ❌ Error

// ✅ Correct Way (Type Check First)
if (typeof val2 === "string") {
  console.log(val2.toUpperCase()); // ✅ Safe
}

// 📌 TypeScript bolta hai:-->
// “Pehle prove karo kya type hai, phir use karo.”

// +++++++++ Non Primitive ++++++++
let arr: number[] = [2, 4, 5, 6, 7];
let arr2 = [3, 5, 4, 3]; // hover on arr2 find number[]

let arr3 = ["Monu", 20, "Mohit", 30]; // hover on arr3
let arr4: (string | number)[] = ["Monu", 20, "Mohit", 30]; // same as line 73
let arr5: (string | number | boolean)[] = ["Rohit", 10, "Monu", true];
arr5.push(true);

// ++++++ tuples +++++++++
const tuple: [string, number, number] = ["Monu", 10, 30];

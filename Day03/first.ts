// const num:number = 10;   // error
// why:->
// 🔥 REAL REASON (Most Common) :->
// 👉 Tumhari file module nahi hai
// TypeScript me agar file module nahi hoti, to:
// Us file ke variables global scope me chale jaate hain

// Agar project me kahin aur bhi num naam ka variable hai
// (same file me ya kisi aur .ts file me)
// ➡️ TypeScript bolta hai: redeclare ho raha hai
// 📌 Ye beginners ke saath bahut hota hai

// How to fix this:-->
// ✅ FIX 1 (BEST & RECOMMENDED)
// File ko module bana do 👇

// File ke top ya bottom me ek line add karo:

// export {};

// Final Code
// export {};

// const num: number = 10;

// ✅ Error gayab
// ✅ Ab ye file apni scope me rahegi

// ❓ export {} kya karta hai?

// Ye bolta hai:

// “Ye file ek module hai”

// Module ke variables global scope me leak nahi hote

// 📌 Koi actual export nahi hota, sirf scope fix hota hai

// ✅ FIX 2 (Temporary)

// Variable ka naam change karo:

// const num1: number = 10;

// ⚠️ Ye sirf workaround hai, real solution nahi

// ✅ FIX 3 (Agar multiple files hain)

// Check karo:

// Kya same folder me koi aur .ts file me bhi:

// const num = ...

// likha hai?

// ➡️ Sab files module nahi hongi to conflict aayega

// +++++++++++++++ Starting +++++++++++++++
export {};

// const num: number = 10;

// +++++++++ ? optional keyword +++++++
interface Person {
  name: string;
  age: number;
  gender: string;
  //   aadhar:number; // agr ye likhe hai means define krna hi hoga
  aadhar?: number; // aur agr ? hai to means optional de bhi skte hai ya nhi bhi
}

const obj: Person = {
  name: "Rohit",
  age: 20,
  gender: "Male",
  aadhar: 1234,
};

// +++++++ Utility Types for Objects ++++++
// 1: Partial<Person>
// 2: Required<Person>
// 3: Readonly<Person>

// latest Example
interface customer {
  name: string;
  age: number;
  balance: number;
}

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
const obj2: Readonly<customer> = {
  name: "Rohit",
  balance: 210,
  age: 23,
};
// obj2.name = "Mohit"; // error

// ++++ Array of objects +++++++++

const arr: { name: string; age: number }[] = [
  { name: "Rohit", age: 20 },
  { name: "Monu", age: 21 },
];

//  Or we can write
interface people {
  name: string;
  age: number;
}
const arr2: people[] = [
  { name: "Rohit", age: 20 },
  { name: "Monu", age: 21 },
];

// +++++++++ Function in TS ++++++++

function greet(a: number): number {
  console.log(a);
  return a + 5;
}

console.log(greet(10));

function meet(msg: string, val: number): void {
  console.log(msg, val);
}

meet("Monu", 12);

// default parameter
function neet(msg: string = "Jit") {
  console.log(msg);
}
neet();
neet("Bittu");

// Optional parameter
function Gate(person?: string) {
  console.log(person || "Mohan");
}
Gate("Rohit");
Gate();

// arrow function :--->

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(6, 5));

// callback function

function placeOrder(order: number, callback: (amount: number) => void): void {
  const amount: number = order + 10;
  callback(amount);
}
placeOrder(10, (amount) => {
  console.log(amount);
});

// Or we can write:-->
type chill = (amount: number) => void;
function placeOrder2(order: number, callback: chill) {
  const amount = order + 10;
  callback(amount);
}
placeOrder2(10, (amount) => {
  console.log(amount);
});

// rest Parameter

function total(...arr: number[]) {
  let ans: number = 0;
  arr.forEach((val: number) => {
    ans = ans + val;
  });
  console.log(ans);
}
total(2, 3, 4, 4, 3, 2, 4, 6);

// Error In JS

// 1st error:->
let price = 300;
price = "Twenty";
console.log(price * 10); // NaN

// 2nd error:-->
let obj = {
  name: "Rohit",
  age: 17,
};
console.log(obj.height); // undefined

// 3rd error:-->
let age = 20;
age = "Twenty";
console.log(age + 10); // Twenty10

// 4th error:-->(📌 Problem: Argument pass nahi kiya, JS ne error nahi diya.)
function greet(name) {
  console.log("Hello " + name);
}

greet(); // Hello undefined

// 5th error:-->(📌 Problem: age missing, but JS silent hai.)
function printUser(user) {
  console.log(user.name, user.age);
}

printUser({ name: "Rohit" }); // Rohit undefined

// 6th error:-->(📌 Problem: Future calculation break ho sakta hai.)
let marks = [90, 85, 88];
marks.push("Ninety");

console.log(marks); // [90,85,88,"Ninety"]

// 7th error:-->(📌 Problem: "false" string truthy hoti hai.)
let isLoggedIn = "false";

if (isLoggedIn) {
  console.log("User Logged In");
}

// 8th error:-->(📌 Problem: Type coercion → unexpected result.)
let x = 0;

if (x == false) {
  console.log("Equal");
}

// 9th error:-->(📌 Problem: Variable hoisting creates confusion.)
console.log(a); // undefined
var a = 10;

// 10th error:-->(📌 Problem: Pollutes global scope.)

function test() {
  total = 100; // no let/var/const
}

test();
console.log(total); // 100

// 11th error:-->(📌 Problem: null == undefined is true.)
let value = null;

if (value == undefined) {
  console.log("Equal");
}

// 12th error:-->(📌 Problem: return missing.)
function sum(a, b) {
  a + b;
}

console.log(sum(5, 3)); // undefined

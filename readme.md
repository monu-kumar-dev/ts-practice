<!-- Age example: 30 == Thirty -->
<!-- Number calculation result -->
<!-- Accessing property of an object -->


<!-- First we need to install Typescript compiler -->
1: npm install -g typescript
2: tsc --version

<!-- How to run TS file -->
tsc file_name
tsc yourfile.ts --target es2016

<!-- Intialize config file -->
tsc --init

<!-- run tsc -->

<!-- Every JS file will be valid TS -->
<!-- If there is an error in TS, still it will compile it and convert it into JS file -->
<!-- It will be on the user how to tackle it -->


<!-- watch mode --> (ye apne likh deta hai js me)
tsc --watch

<!-- How to quit it -->
ctrl+C


<!-- How to deal with number -->
let age:number = 30;

<!-- How to deal with string -->
let name: string = "Alice";

<!-- How to deal with bigint -->
let largeNumber: bigint = 123456789012345678901234567890n;

<!-- How to deal with boolean -->
let isActive: boolean = true;

<!-- How to deal with undefined -->
let value: undefined;

<!-- How to deal with null -->
let value: null = null;


<!-- Type Inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine the type of a variable based on the value assigned to it. This means that even if you don't explicitly specify a type, TypeScript can infer the most appropriate type and apply it. -->

let age = 25;  // TypeScript infers that age is of type 'number'
let name = "Alice";  // TypeScript infers that name is of type 'string'


<!--  Explicit Type Annotations -->
when we assigned type by our own

<!-- Limitations of Type Inference -->
any: if we don't initilize the value initially

<!-- any -->
let value: any = 42;
Represents any type of value. When a variable has the any type, it can be assigned any value, and no type checking is done.


<!-- unknown -->
The any and unknown types in TypeScript are both used to represent values of any type.

The unknown type is safer than any because you cannot perform operations on an unknown value without first narrowing its type through type checks.


<!-- Non Primitive Data type -->

<!-- 1: Array -->
let numbers: number[] = [2,3,4,6];
let numbers:(string | number)[] = [2,3,4,5,6,"Mohit"];

<!-- 2: Tuples -->
Tuples are arrays with a fixed number of elements of specific types.

let tuple: [string, number] = ["Rohit",10];




<!--  Compile-time refers to the phase when the source code is translated into machine code or an intermediate format (e.g., bytecode). This is done by a compiler. -->


Errors detected at this phase are called compile-time errors.
Examples of compile-time errors include:
Syntax errors (e.g., missing semicolons).
Type mismatches (e.g., assigning a string to a variable declared as a number in TypeScript).
Variable declarations without initialization (if required by the language).



<!-- Runtime refers to the phase when the program is executed after it has been compiled (or interpreted). -->

<!-- Errors detected during this phase are called runtime errors.
Examples of runtime errors include:
Dividing by zero.
Accessing undefined variables or null references.
Running out of memory.
Examples of Runtime Activities:

Executing code instructions.
Handling user inputs.
Interacting with APIs or databases -->




<!--  Objects -->

let person: { name: string; age: number; isStudent: boolean };

person = {
    name: "rohit",
    age:23,
    isStudent: true
}


<!-- Inline -->
let account: {name:string, balance:number, age?:number} = {
    name:"Rohit",
    balance:420
};

<!-- Using Type Alises -->

type student = {
   names: string,
   age: number
};

let College_student: student = {
    names:"Rohit",
    age: 20
};


<!-- using interface -->


interface customer {
    name : string,
    account_number: number,
    balance: number,
    age: number 
}

let per: customer = {
    name: "Rohit",
    account_number:230921,
    balance:420,
    age: 12
}

<!-- extend with interface -->

<!-- type uses intersections (&) to combine multiple types. -->

type animal = gen & {

}


<!--  Declaration Merging -->
interface person {
    name: string
}

interface person {
    age: number
}

<!-- Above syntax is allowed -->

But with type it is not allowed

<!-- ? optional keyword
 -->


<!-- Nested Objects -->


<!-- Utility Types for Objects -->
1: Partial<Person>
2: Required<Person>
3: Readonly<Person>

<!-- Array of Objects -->


<!-- Function in JS -->


function greet(name: string): string {
    return `Hello, ${name}!`;
}

<!-- Optional Parameters ?-->
function meet(name?:string):void{
    console.log(`Hello ${name||"Guest"}`);
}

<!-- Default parameter -->






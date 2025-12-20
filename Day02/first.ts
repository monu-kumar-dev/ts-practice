let num: number = 10;
// num = "Rohit"; // error

let x = 20; // why donot show error
// x = "Monu"; // here show error

// note:--> In typescript agr hm type ko declare nhi krte hai, aur value de dete hai jaisa ki line 4 me hai waha error nhi aata kyuki wo automatically jo value rahta hai uska type ko le leta hai.
// Note:--> Line 5 me error aa raha hai kyuki line 4 me wo automaticaaly type ko number le liya tha ab mai usme string value de raha hu.

let val = "Monu";
// val = 10; // error (line 10 determine auto string)

// +++++ Dangerous Zone ++++++++++
// 1st :--> (any)
let money;
money = "Monu"; // ye work kyu jb hm hover kr rhe hai money pr tb likha hua hai any means koi bhi value.
money = 20;

// 2nd:-->(unknown)
let val2: unknown;
val2 = 20;
val2 = "Rohit";


// ++++  Difference between any and Unknown ++++++++
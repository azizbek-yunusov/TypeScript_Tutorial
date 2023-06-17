"use strict";
// 1. TypeScript ma'lumot turlari
// let a = 15
// a = 45
// let a: number;
// a = 15;
// let b: string = "String";
// let c: boolean = true;
// let d = null
// let f = {}
// let f: object = {}
// let f: { name: string; age: number } = { name: "Azizbek", age: 22 };
// f.name
// let g: any;
// g = 12
// g= "yes"
//////////////////////////////////////////////////////////////////
// 2. Functions, signature, overload_functions
// function pow(x: number, y: number): number {
//   return x ** y;
// }
function pow(x, y) {
    return `${x} ** ${y} = ${x ** y}`;
}
// console.log(pow(4, 3));
// arrow function
const add = (x, y) => x + y;
function log(x) {
    console.log(x);
}
function someFunc(s) {
    throw new Error(s);
}
///// signature ////
let c;
c = function (a, b) {
    return `${a}: ${b}`;
};
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc("Javob", 2));
// console.log("hello TypeScript");
// throw new Error("Some Error")
//# sourceMappingURL=index.js.map
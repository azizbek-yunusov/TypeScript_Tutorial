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

function pow(x: number, y: number): string {
  return `${x} ** ${y} = ${x ** y}`;
}
// console.log(pow(4, 3));

// arrow function
const add = (x: number, y: number): number => x + y;

function log(x: number): void {
  console.log(x);
}

function someFunc(s: string): never {
  throw new Error(s);
}
///// signature ////

let c: (x: number, y: string) => string;

c = function (a: number, b: string): string {
  return `${a}: ${b}`;
};

// console.log(c(3, "javob"));

////overload_functions////

function overloadFunc(x: number, y:number): number
function overloadFunc(x: string, y:number): string
function overloadFunc(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return `${x} ${y}`;
  }
}

console.log(overloadFunc("Javob", 2));

// console.log("hello TypeScript");

// throw new Error("Some Error")

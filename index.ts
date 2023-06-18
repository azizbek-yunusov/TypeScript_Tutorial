// 4 - dars. Tiplarni o'zgartirish va birlashtirish
// let a: any = 10
// let b: number = a
//// !!!!!!!!!!!
// unknown types
let a: unknown = 20.1245;
// let d: number = c

let e: number = <number>a;
let f: number = a as number;
//
// (a as number).toFixed(2)

// union type
let h: number | string = 10;
h = "s";

// literal types
let s: "sm" | "md" | "lg";

s = "sm";
s = "lg";
s = "md";

/// type alieses
type Sizes = "SM" | "MD" | "LG" | boolean;
let s2: Sizes = "SM";

s2 = "MD";
s2 = "SM";
let s3: Sizes = false;

s3 = true;

type Obj = { name: string } | { age: number };

let obj: Obj;
obj = { name: "s" };
obj = { age: 15 };
obj = { name: "ziz", age: 15 };

type Obj2 = { name: string } & { age: number };
let obj2: Obj2;
obj2 = { name: "Aziz", age: 22 };
// obj = {name: "Aziz"} ???!!!

type Obj3 = { name: string; age?: number };
let obj3: Obj3;
obj3 = { name: "Aziz", age: 22 };

if ("age" in obj3) {
  console.log("mavjud");
} else {
  console.log("mavjud emas");
}

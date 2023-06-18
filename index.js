// 4 - dars. Tiplarni o'zgartirish va birlashtirish
// let a: any = 10
// let b: number = a
//// !!!!!!!!!!!
// unknown types
var a = 20.1245;
// let d: number = c
var e = a;
var f = a;
//
// (a as number).toFixed(2)
// union type
var h = 10;
h = "s";
// literal types
var s;
s = "sm";
s = "lg";
s = "md";
var s2 = "SM";
s2 = "MD";
s2 = "SM";
var s3 = false;
s3 = true;
var obj;
obj = { name: "s" };
obj = { age: 15 };
obj = { name: "ziz", age: 15 };
var obj2;
obj2 = { name: "Aziz", age: 22 };
var obj3;
obj3 = { name: "Aziz", age: 22 };
if ("age" in obj3) {
    console.log("mavjud");
}
else {
    console.log("mavjud emas");
}

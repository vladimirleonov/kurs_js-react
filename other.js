"use strict";

console.log([] + false - null + true);
console.log([] + false - null);
console.log(typeof ([] + false));
console.log(typeof (""));
console.log("fsdf" == 0);
console.log("sfsfs" - null);
console.log([] - null);
console.log("" - null);

let y = 1;
let x = y = 2;
console.log(x);
console.log(y);

console.log([] + 1 + 2); //12

console.log("fs" - 3); //NaN
console.log(typeof ("" - 3)); //-3

console.log(2 && 1 && null && 0 && undefined); //null

console.log(!!(1 && 2) === (1 && 2)); // false

console.log(null || 2 && 3 || 4); //3

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a === b); //false

console.log(+"Infinity"); //Infinity(number)

console.log("Ёжик" > "яблока"); //false, watch unucode

console.log(0 || "" || 2 || undefined || true || false); //2
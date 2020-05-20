
"use strict";

const arr = [2, 4, 6, 8, 10];

// arr[19] = 30;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function (item, i, arr) {
   console.log(`${i}: ${item} внутри массива ${arr}`);
});

for (let key of arr) {
   let i = 0;
   console.log(`${i}: ${key} внутри массива ${arr}`);
   i++;
}

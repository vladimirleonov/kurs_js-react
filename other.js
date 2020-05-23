"use strict";

// const obj = {
//    a: 1,
//    b: 2,
//    c: {
//       x: 3,
//       y: 4
//    }
// }

// function copy(mainObj) {
//    const objCopy = {};
//    for (let key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
//    return objCopy;
// }

// const newObj = copy(obj);
// newObj.a = 20;
// console.log(obj);
// console.log(newObj);





const oldObj = {
   a: 2,
   b: 4
}

const newObj = { ...oldObj };
newObj.a = 20;
console.log(oldObj);
console.log(newObj);

const oldArray = [2, 4, 6];
const newArray = [...oldArray];
newArray[0] = 33;
console.log(oldArray);
console.log(newArray);




function consoleLog(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}
const getUserAnsvers = [5, 7, 9];
consoleLog(...getUserAnsvers);

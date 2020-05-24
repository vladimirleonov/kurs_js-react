"use strict";


const soldier = {
   health: 400,
   armor: 100,
   sayHello: function () {
      console.log('Hello');
   }
};

const jonh = Object.create(soldier);

Object.setPrototypeOf(jonh, soldier);

console.log(jonh.health);
jonh.sayHello();
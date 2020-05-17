function showReturn() {
   let count = 0;

   const myFunction = function () {
      count = count + 1;
      return count;
   };

   return myFunction;
}

let increment = showReturn();
let inc1 = increment();
let inc2 = increment();
let inc3 = increment();
console.log(inc1, inc2, inc3);
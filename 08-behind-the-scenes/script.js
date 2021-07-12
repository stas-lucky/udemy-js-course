"use strict";

// function calcAge(brithYear) {
//   const age = 2037 - brithYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${brithYear}`;
//     console.log(output);

//     if (brithYear >= 1981 && brithYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// Swap functions

const swap = function (a, b) {
  const s = a;
  a = b;
  b = s;
  console.log("Swap: ", a, b);
};

const x = 1;
const y = 2;
console.log(x, y);
swap(x, y);
console.log(x, y);

const o1 = {
  val: 1,
};
const o2 = {
  val: 2,
};
console.log(o1, o2);
swap(o1, o2);
console.log(o1, o2);

const jessica = {
  firstName: "Jessica",
  lasrName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lasrName = "Davis";
console.log("Before marrige:", jessica);
console.log("After marrige:", jessicaCopy);

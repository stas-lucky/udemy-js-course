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

// const swap = function (a, b) {
//   const s = a;
//   a = b;
//   b = s;
//   console.log("Swap: ", a, b);
// };

// const x = 1;
// const y = 2;
// console.log(x, y);
// swap(x, y);
// console.log(x, y);

// const o1 = {
//   val: 1,
// };
// const o2 = {
//   val: 2,
// };
// console.log(o1, o2);
// swap(o1, o2);
// console.log(o1, o2);

// const jessica = {
//   firstName: "Jessica",
//   lasrName: "Williams",
//   age: 27,
// };

// const jessicaCopy = Object.assign({}, jessica);
// jessicaCopy.lasrName = "Davis";
// console.log("Before marrige:", jessica);
// console.log("After marrige:", jessicaCopy);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];

// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

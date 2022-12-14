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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

// restaurant.orderPizza("mushrooms", "onion", "olives", "extra");

// const newRestaurant = { ...restaurant, foundedIn: 1998, founder: "Guiseppe" };

// console.log(newRestaurant);

// console.log({ ...restaurant });

// // const ingridients = [
// //   prompt("Let's make a pasta! Ingredient1?"),
// //   prompt("Ingredient 2?"),
// //   prompt("Ingredient 3?"),
// // ];
// // console.log(ingridients);
// // restaurant.orderPasta(...ingridients);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);

// const x = [23, 5, 7];
// add(x);
// add(...x);

// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null || 1);

// if (undefined || null || 1) console.log("true");
// else console.log("false");

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

//console.log(guests1, guests2);

console.log(`0 (int) - ${Boolean(0)}`);
console.log(`1 (int) - ${Boolean(1)}`);
console.log(`"" (empty string) - ${Boolean("")}`);
console.log(`"Jonas" - ${Boolean("Jonas")}`);
console.log(`null - ${Boolean(null)}`);
console.log(`undefined - ${Boolean(undefined)}`);

// Nulish values: null and undefined (NOT 0 or '')
//restaurant.numGuests = 23;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const { openingHours } = restaurant;
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

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

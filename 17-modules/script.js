import { addToCart, totalPrice as price, tq, cart } from "./shoppingCart.js";

import * as ShoppingCart from "/shoppingCart.js";

console.log("Importing module");

ShoppingCart.addToCart("apple", 2);
ShoppingCart.addToCart("orznge", 4);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
console.log(cart);

// import cloneDeep from "lodash-es/cloneDeep";
// import isObject from "lodash-es/isObject";

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const addStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     addStock,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("pizza", 2);
// console.log(ShoppingCart2);

// const state = {
//   cart: [{ product: "bread", quantity: 5 }],
//   cart: [{ product: "pizza", quantity: 5 }],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;

// console.log(stateClone);
// console.log(stateDeepClone);

// console.log(isObject({}));

// if (module.hot) {
//   module.hot.accept();
// }

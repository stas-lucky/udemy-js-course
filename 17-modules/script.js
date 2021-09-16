"use strict";
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const addStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    addStock,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);

import cloneDeep from "lodash-es/cloneDeep";

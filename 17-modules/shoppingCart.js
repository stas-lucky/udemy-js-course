console.log("Exporting module");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log("Add to cart");
};

const totalPrice = 10;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

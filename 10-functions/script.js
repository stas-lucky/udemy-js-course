"use strict";

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...other] = str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
    console.log("=========================================================");
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

console.log(oneWord("my test strig"));
console.log(upperFirstWord("my test strig"));

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const testClosure = function () {
    let someVal = 0;

    return function () {
        someVal++;
        console.log(someVal);
    };
};

let someVal = 10;
const myFunc = testClosure();
myFunc();
myFunc();
myFunc();

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

greet("Hello")("Jonas");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hei")("Jonas");

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({
            flight: `${this.airline} flight ${this.iataCode}`,
            name,
        });
    },
};

lufthansa.book(239, "Jonas");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

eurowings.book = lufthansa.book;

eurowings.book(234, "Stas");

const book = lufthansa.book;

//book(23, "Petro");

book.call(eurowings, 23, "Petro");

book.call(lufthansa, 32, "Petro");

book.apply(eurowings, [66, "Stas"]);

const bookEW = book.bind(eurowings);

bookEW(45, "Steven");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

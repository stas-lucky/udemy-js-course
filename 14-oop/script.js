"use strict";

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.hey = function () {
//     console.log("Hey!!!!!!!!!");
//     console.log(this);
// };

// Person.hey();

// Person.prototype.newAge = 100;

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
//     __proto__.newAge = 50;
//     console.log(`New age: ${this.newAge}`);
//     this.newAge = 50;
//     console.log(`Own property: ${this.hasOwnProperty("newAge")}`);
// };

// const person = new Person("Stas", 1986);
// // person.myFunc = function () {
// //     console.log("myFunc");
// //     console.log(this);
// // };
// // person.myFunc();
// person.calcAge();

// console.dir(Person);
// console.log(person);

// const person2 = new Person("Tania", 1985);

// console.log(person2);
// console.log(person2 instanceof Person);

// const arr = [3, 6, 4, 5, 6, 9, 3];

// const h1 = document.querySelector("h1");

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is goint at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is goint at ${this.speed} km/h`);
// };

// const car1 = new Car("BMW", 20);
// car1.accelerate();
// car1.accelerate();

// const car2 = new Car("Mercedes", 95);
// car2.break();

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(" ")) this._fullName = name;
//         else alert(`${name} is not correct name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log("Hey!!!!!!!!!");
//         console.log(this);
//     }
// }

// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.firstName}`);
// // };

// const stas = new PersonCl("Stas R", 1986);
// console.dir(stas);
// console.dir(stas.__proto__ === PersonCl.prototype);
// stas.calcAge();
// stas.greet();
// console.log(stas.age);
// console.log(stas._fullName);
// PersonCl.hey();

// const account = {
//     owner: "Jonas",
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         return this.movements.push(mov);
//     },
// };

// console.log(account.latest);
// account.latest = 10;
// console.log(account.latest);

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is goint at ${this.speed} km/h`);
//     }
//     break() {
//         this.speed -= 5;
//         console.log(`${this.make} is goint at ${this.speed} km/h`);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(val) {
//         this.speed = val * 1.6;
//     }
// }

// const car3 = new CarCl("BMW", 20);
// car3.accelerate();
// car3.accelerate();
// console.log(car3.speedUS);
// car3.speedUS = 100;
// console.log(car3.speedUS);
// console.log(car3);

// const car4 = new CarCl("Mercedes", 95);
// car4.break();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = Car;

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} goint at ${this.speed} km/h, with charge of ${this.charge}`
    );
};

const tesla = new EV("Tesla", 80, 30);
tesla.chargeBattery(50);
tesla.accelerate();
tesla.accelerate();
tesla.break();
tesla.break();
tesla.break();

console.dir(tesla.__proto__.constructor);

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not correct name`);
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log("Hey!!!!!!!!!");
        console.log(this);
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    inctroduce() {
        console.log(`My name is ${this.fullName} and I sduty ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2037 - this.birthYear} years old`);
    }
}

const student = new StudentCl("stas r", 1986, "JS course");
student.inctroduce();

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.init("Steven", 1990);

steven.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
    PersonProto.init.call(this, fullName, birthYear);
    this.course = course;
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "CS");
jay.calcAge();

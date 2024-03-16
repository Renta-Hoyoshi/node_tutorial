// // setTimeout(() => {
// //     console.log("setTimeOut()");
// // }, 0);

// // setImmediate(() => {
// //     console.log("setImmdiate");
// // });

// // process.nextTick(() => {
// //     console.log("nextTick");
// // });

// // Promise.resolve().then(() => {
// //     console.log("resolve.thne");
// // });

// // console.log("Hello");
// // console.trace("World");

// // console.log("Message: %o", {"Hello": "World"})

// let sum = 0;
// console.time("timer1");
// for (let index = 0; index < 101; index++) {
//     sum += index;
    
// }
// console.timeEnd("timer1");

// console.log(process.env);
// console.log(process.argv);
// console.log(process.cwd());
// console.log(process.__dirname);
// console.log(process.platform);

//クラスの実現方法
// const Car = class {
//     constructor (name) {
//         this.name = name;
//     }

//     drive() {
//         console.log("zoom zoom...");
//     }
// };

// const Lamborghini = class extends Car {
//     constructor(name) {
//         super(name);
//     };

//     echo() {
//         super.drive();
//     }

//     drive() {
//         console.log(`fire ${this.name}`);
//     }
// }

// const car = new Lamborghini("lamborghini");
// car.echo();
// car.drive();
// const util = require("util");
// const Car = function(name) {
//     this.name = name;
// };

// Car.prototype.drive = function() {
//     console.log("zoom zoom ...");
// }

// const Lamborghini = function (name) {
//     Lamborghini.super_.call(this, name);
// };
// util.inherits(Lamborghini, Car);

// Lamborghini.prototype.echo = function() {
//     Lamborghini.super_.prototype.drive.call(this);
// };

// Lamborghini.prototype.drive = function () {
//     console.log(`fire ${this.name}`);
// };

// const car = new Lamborghini("lamborghini");
// car.echo();
// car.drive();

// const hoyoshi = require("./module");
// console.log(hoyoshi);

// const { echo, area } = require("./methods");
// echo("hello");
// console.log(area(5, 10));

// const Lamborghini  = require("./lamborghini");

// const car = new Lamborghini("lamborghini");
// car.drive();
// car.echo();

// const config = require("./config");
// console.log(JSON.stringify(config));

// const a = require("./lib/module-a/index");
// const b = require("./lib/module-b/index");
// a();
// b();

// moduleはnpmのサイトが分かりやすい
// グローバルはプロジェクトをまたいで利用か
// ローカルは現在のプロジェクトのみ

const cool = require("cool-ascii-faces");
console.log(cool());
console.log(Date.now());
console.log(new Date().toISOString());
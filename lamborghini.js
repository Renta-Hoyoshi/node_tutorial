const Car = require("./car");

const Lamborghini = class extends Car {
    constructor (name) {
        super(name);
    }

    echo () {
        super.drive();
    }

    drive() {
        console.log(`fire ${this.name}`);
    }
};

module.exports = Lamborghini;
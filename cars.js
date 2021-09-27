class Vehicle {

    //Declare constructor with 3 arguments
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Declaring method which prints to console
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    }
}

//Declaring an inheritance class
class Cars extends Vehicle {

    //Declare constructor with 4 arguments
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;

    }

    //Declaring method which prints to console
    Information() {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//instanciating object
let myCar = new Cars("VW", "Golf", 2011, 5);
myCar.Information();
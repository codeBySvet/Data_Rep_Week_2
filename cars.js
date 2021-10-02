class Vehicle {

    //Declare constructor with 3 arguments and assigning them to local variables
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Declaring method which prints variables to console
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    }
}

//Declaring an inheritance class
class Cars extends Vehicle {

    //Declare constructor with 4 arguments
    constructor(make, model, year, doors) {
        
        //calling variables from parent class constructor to assign their values to local variables
        super(make, model, year);
        
        //assinging local variable to variables not covered by the parent class constructor
        this.doors = doors;

    }

    //Declaring method which prints to console
    Information() {
        
        //calling the print to console method from the parent class to print out most variables
        super.Information();
        
        //printing out variables not within the parent classes print method
        console.log(`Doors: ${this.doors}`);
    }
}

//instanciating object
let myCar = new Cars("VW", "Golf", 2011, 5);
myCar.Information();

class BMI {

    //Declare constructor with 2 arguments (used in calculations of BMI)
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //Declare method for calulations
    calculateBMI() {

        //formula for calculations 
        let bmi = this.weight / (this.height ** 2);

        return bmi;
    }
}

//instanciating object
let myBmi = new BMI(2, 90);

//creating new variable and assigning it the value of the calculated BMI
let calculatedBMI = MyBmi.calculateBMI();

//Outputting to console
console.log(calculatedBMI);

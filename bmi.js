class BMI {

    //Declare constructor with 2 arguments
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
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();

//Outputting to console
console.log(calculatedBMI);
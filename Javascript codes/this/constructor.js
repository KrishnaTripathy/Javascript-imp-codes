// Template
class ToyotaCar{
    constructor() {
        console.log("creating new object");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand){
        this.brand= brand;
    }
}
let fortuner = new ToyotaCar(); //fortuner became a object.   //op: creating new object
let lexus = new ToyotaCar();  //creating new object





class ToyotaCar1{
    constructor(brand) {
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    
}
let fortuner1 = new ToyotaCar1("fortuner"); //constructor
let lexus1 = new ToyotaCar1("lexus");  //constructor





class ToyotaCar2{
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    
}
let fortuner2 = new ToyotaCar2("fortuner" , 10); //constructor
let lexus2 = new ToyotaCar2("lexus" , 12);  //constructor

// Template
class ToyotaCar{
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
let fortuner = new ToyotaCar(); //fortuner became a object.
let lexus = new ToyotaCar();
fortuner.setBrand("fortuner");
lexus.setBrand("lexus");
fortuner
lexus
fortuner.start();
fortuner.stop();
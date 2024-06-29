class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work(){
        console.log("do something");
    }
}

class Engineer  extends Person {
    constructor(branch){
        console.log("enter child constructor");
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("solve problems, build something");
    }
}
class Doctor  extends Person {
    work() {
        console.log("build something");
    }
}
let krishna = new Engineer("chemical");






class Person1 {
    constructor(name) {
       
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work(){
        console.log("do something");
    }
}

class Engineer  extends Person1 {
    constructor(name){
        
        super(name); //to invoke parent class constructor
       
    }
    work() {
        console.log("solve problems, build something");
    }
}
class Doctor  extends Person1 {
    work() {
        super.eat();
        console.log("build something");
    }
}
let krishna1 = new Engineer("krishna");

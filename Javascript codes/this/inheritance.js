class Parent {
    hello() {
        console.log("hello");
    }
}
class Child extends Parent {

}
let obj = new Child();

obj.hello();//hello





class Person {
    constructor() {
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
    work() {
        console.log("solve problems, build something");
    }
}
class Doctor  extends Person {
    work() {
        console.log("build something");
    }
}
let krishna = new Engineer();
krishna.eat() //eat
krishna.work() //solve problems, build something
 let p1 = new Person;

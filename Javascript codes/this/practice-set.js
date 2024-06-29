// Q.you are creating a website for your college. Create a class User with 2 properties , name and email. It also has a method called viewData() that allows  user to view website data.


let DATA = "secret info";
class User {
    constructor (name , email){
        this.name = name ;
        this.email = email;
    }
    viewData() {
        console.log("data =", DATA);
    }

}
let student1 = new User("krishna", "abc@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
student1.viewData();


// Q2.Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

let DATA1 = "secret info";
class User {
    constructor (name , email){
        this.name = name ;
        this.email = email;
    }
    viewData() {
        console.log("data =", DATA);
    }

}
class Admin extends User {
    constructor(name, email){
        super(name,email);
    }
    editData() {
        DATA = "some new value";
    }
}
let student3 = new User("krishna", "abc@gmail.com");
let student4 = new User("aman", "aman@gmail.com");
student1.viewData();
let admin1 = new Admin("admin","admin@gmail.com");
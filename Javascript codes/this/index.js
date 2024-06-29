// this in global space
console.log(this);//global object = window

// this inside a function 
function x(){
    console.log(this);
}x();//strict mode
window.x();//non-strict mode

// this inside a object method
const  obj = {
    a:10,
    x:function(){
        console.log(this.a);//op:10
    }
}
obj.x();

// call vs apply vs bind

// call

const student = {
    name:"krishna",
    printName:function(){
        console.log(this.name);
    }
}
student.printName();

const student2={
    name:"deepa",
};
student.printName.call(student2);



let name = {
    firstname:"krishna",
    lastname:"ty",
    printFullName:function(){
        console.log(this.firstname+ " " + this.lastname);
    }
}
name.printFullName();

let name2 = {
    firstname: "deepa",
    lastname:"ty",
    }
    name.printFullName.call(name2);




    let name1 = {
        firstname:"krishna",
        lastname: "ty",
    }
    let printFullName = function() {
        console.log(this.firstname+ " " + this.lastname);
    }
    printFullName.call(name1);

    let name3 = {
        firstname:"deepa",
        lastname:"ty",
    }
    printFullName.call(name3);



    let name4={
        firstname:"krishna",
        lastname:"trpathy"

    }
    let printFullName1 = function(hometown) {
        console.log(this.firstname + " " + this.lastname + "from" + " " +hometown);
    }
    printFullName1.call(name4,"delhi");


    let name5 = {
        firstname:"manas",
        lastname:"sahu",
    }
    printFullName.call(name5);
    printFullName.call(name5, "Angul");


    // Apply

    printFullName.apply(name5,["mumbai","angul"]);

    // Bind

    let printMyName = printFullName.bind(name2, "mumbai" , "angul");
    console.log(printMyName);
    printMyName();


    // this inside arrow function

    const obj1 = {
        a:10,
        x:() =>{
            console.log(this);
        },
    };
    obj1.x();


    const obj2 = {
        a:20,
        x:function(){
            const y = () => {
               console.log(this);
            };
            y();
        }
    };
    obj2.x();



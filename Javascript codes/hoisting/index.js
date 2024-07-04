var x= 7;
function getName() {
    console.log("namaste js");
}
getName();
console.log(x);// op: namaste js
                    //   7



getName();
console.log(x);
                    
var x= 7;
function getName() {
    console.log("namaste js");
}
// op: namaste js
//     undefined 




getName();
console.log(x);
                    

function getName() {
    console.log("namaste js");
}
//op: namaste js
    // x is not defined 





    var x=7;
    function getName() {
        console.log("namaste js");
    }
    console.log(getName); //getName(){
        // console.log("namaste js");
    // }



    console.log(getName);
    var x=7;
    function getName() {
        console.log("namaste js");
    }
     //op: getName(){
        // console.log("namaste js");
    // }





    getName();
    console.log(x);
    console.log(getName);

    var x=7;
    var getName = () => {
        console.log("namaste js");
    }
    // op: here getName is a variable. so, op: it shows getName is not a function


var getName2 = function () {

}  //op: it also a variable.




getName();
console.log(x);
console.log(getName);

var x=7;
function getName() {

} 
// op: getName is undefined




var x=7;
function getName() {
    console.log("namaste js");
}
getName();
console.log(x);
console.log(getName); 

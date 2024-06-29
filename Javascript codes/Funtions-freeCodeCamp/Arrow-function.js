let greet = function () {
    console.log("Hello world");
    return 1;
}
console.log(greet());//Hello world
                    //  1


let greet1 = function(user) {
    console.log("Hello" + user);
    return 1;
}   
console.log(greet1('Navin'));  //HelloNavin
                              //  1  

// Arrow function

let greet2 = (user) => {
    console.log("Hello" + user);
    return 1;
}   
console.log(greet2('Navin'));   //HelloNavin
                                //  1  



                    
let add1 = function(num1 , num2){
    return num1 + num2 ;
}
let sum1 = add1(5,6);
console.log(sum1);



let add = (num1 , num2)=> num1 + num2 ;
let sum = add(5,6);
console.log(sum);

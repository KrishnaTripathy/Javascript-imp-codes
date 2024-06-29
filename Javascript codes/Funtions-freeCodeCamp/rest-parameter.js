function sum(a,b){
    return a+b;
}
let result1 = sum(4,5,6,2);
console.log(result1);//9

// this is old way
function sum(){
    return arguments[0] + arguments[1] + arguments[2];
}
let result2 = sum(4,3,6,2);
console.log(result2); //13


// this is new one

function sum(a,b,...args){
    let num = a + b;
    for (let n of args){
        num = num +n;
    }
    return num ;
}
let result = sum(4,3,6,2,5);
console.log(result)



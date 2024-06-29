// function declaration
// 1.how to declare a function
// with expression
// without expression


function hi(){
    console.log("krishna"); 
}
hi(); //krishna


//function parameter
function hii(param){
    console.log(param);
}
hii("krishna");//krishna




// what expression has

const count = 100;

// function expression

const printMe = function () {
    console.log('print');
}
printMe();//print

// same as

function printMe (){
    console.log('print');
}
printMe();//print


// using parameter

const printMeAgain = function(a,b){
   console.log(a,b);
}
printMeAgain(10,20);



// How to return from a function
let p = x(); //undefined

function sum(a,b){
    return a + b;
}
sum(2,3);

// this one perfect

function sum(a,b){
    let ret = a + b;
    return ret;
}
sum(2,4);



// Default parameter
function calc(a,b){
    return (2*(a+b));
}
calc(2,3);//10
calc(3);//NaN


function calc(a,b=0){
    return (2 * (a+b));
}
calc(3);



// Rest Parameters

function collectThings(x,...y){
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9);
// op
x:1
y:[2,3,4,5,6,7,8,9]



// Arrow Functions
const add = (x,y) => {
    return x+y ;
}
add(2,3)

or 
const add1 = (x,y) => x+ y;



// Nested Functions

function outer(){
    console.log('outer');
    function inner(){
        console.log('inner');
    }
    inner();
}
outer();


// Function Scope

function doSomething(){
    let x=10;
    const y=20;
    var z= 30;
    console.log(x,y,z);
}
doSomething();



// closure
function outer(x){
    function inner(y){
        return x + y;
    }
    return inner;
}
const outerReturn = outer(10);
outerReturn(2);



// Callback function

function foo(bar){
    bar();
}
foo(function(){
    console.log('bar');
})


function named(){
    console.log('bar');
}
foo(named);



// High order function

function returnFn(){
    return function(){
        console.log('returning');
    }
}
const fn = returnFn();
fn();



// Pure function

function SayGreeting(name){
    return `Hello ${name}`;
}
SayGreeting('Tapas');
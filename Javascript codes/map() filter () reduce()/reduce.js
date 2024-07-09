// const arr = [5,1,3,2,6];

// sum
const arr = [5,1,3,2,6];
function findSum(arr){
    let sum = 0;
    for(let i=0; i< arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
 }
 console.log(findSum(arr));


//  reduce
const output = arr.reduce(function(acc,curr){
    acc = acc + curr ;
    return acc;
}, 0); //why 0 ? bcz array will be not empty or always +ve number
console.log(output);

// max

// const arr = [5,1,3,2,6];
function findMax(arr){
    let max = 0;
    for(let i=0; i< arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
        
    return max;
 }
 console.log(findMax(arr));


//  reduce
const output1 = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;

}, 0);
console.log(output1);



// tricky reduce()

const users = [
    {firstName: "krishna", lastName: "Tripathy" ,age:26},
    {firstName: "deepa", lastName: "Trip" ,age:25},
    {firstName: "kris", lastName: "sahu" ,age:26},
    {firstName: "reshma", lastName: "musk" ,age:23},
];

//acc = {26:2 , 75:1 , 50:1 }

const output2 = users.reduce(function(acc,curr){
if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
}else{
    acc[curr.age] = 1;
}
return acc;
},{}); //empty object
console.log(output2);


// Q.whose age is less than 30 

const output5 = users.reduce(function(acc,curr){
     if(curr.age < 30){
        acc.push(curr.firstName);
     }
     return acc;
},[]);
console.log(output5);


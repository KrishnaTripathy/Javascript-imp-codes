// map()

// const arr = [5,1,3,2,6];

// double - [10, 2,,6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// double - ["101" , "1", "11", "10", "110"]

const arr = [5,1,3,2,6];

function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(2);
}
// const output = arr.map(double);
// const output = arr.map(triple);
// const output = arr.map(binary);
console.log(output);


// it is also correct high order function
// const output = arr.map(function binary(x){
//     return x.toString(2);
// });
// console.log(output);



// arrow function
// const output = arr.map((x) =>{
//     return x.toString(2);
// });
// console.log(output);

// also write like that
// if you transfer a number array to binary array then write this
// const output = arr.map((x) =>x.toString(2));
console.log(output);



// tricky map()

// assume that this is coming from API
const users = [
    {firstName: "krishna", lastName: "Tripathy" ,age:26},
    {firstName: "deepa", lastName: "Trip" ,age:25},
    {firstName: "kris", lastName: "sahu" ,age:16},
    {firstName: "reshma", lastName: "musk" ,age:23},
];

// list of full names
// ["krishna tripathy" , "deepa trip" ...]

const output = users.map((x) => x.firstName + " " +x.lastName)
console.log(output);
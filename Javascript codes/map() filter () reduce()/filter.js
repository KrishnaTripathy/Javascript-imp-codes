// const arr = [5,1, 3, 2, 6];

// filter odd values
// const arr = [5,1, 3, 2, 6];
// function isOdd(x){
//     return x % 2;
// }
// filter even values
// const arr = [5,1, 3, 2, 6];
function isEven(x){
    return x % 2 === 0;
}
// const output = arr.filter(isOdd);
// const output = arr.filter(isEven);
console.log(output);


// const output =arr.filter(function isEven(x){
//     return x > 4;
// })
// console.log(output);


// best format
const arr = [5,1, 3, 2, 6];
const output =arr.filter((x) => x > 4);
console.log(output);


// tricky filter()
//Q.  whose age is less than 30

const users = [
    {firstName: "krishna", lastName: "Tripathy" ,age:26},
    {firstName: "deepa", lastName: "Trip" ,age:85},
    {firstName: "kris", lastName: "sahu" ,age:66},
    {firstName: "reshma", lastName: "musk" ,age:23},
];
// const output1 = users.filter((x) => x.age < 30);
const output1 = users.filter((x) => x.age < 30).map((x)=> x.firstName);
console.log(output1);
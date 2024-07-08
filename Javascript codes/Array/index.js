const words = [1,2,3,4];
console.log(words);

const myArr = [0,1,2,3,4,"kt"];
//it is resizable in js.
console.log(myArr[0]);

//Array methods

myArr.push(6);
console.log(myArr); //0,1,2,3,4,"kt",6
myArr.pop();
myArr.unshift(9); //9,0,1,2,3,4,"kt",6
myArr.shift(); //9

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join();
console.log(myArr); //show the array //[0,1,2,3,4]
console.log(newArr); // join is used for bind the element and string the element. //0,1,2,3,4


// slice , splice

// slice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1); // 1,2  //original array ko manipulate nahi karta
console.log("B ",myArr); //last element not included


// splice
const myn2 =myArr.splice(1,4)
console.log("C ", myArr); // original array ko manipulate karta hai
console.log(myn2); //1,2,3,4 //last element included

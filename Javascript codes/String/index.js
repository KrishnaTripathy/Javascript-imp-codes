const name = "krishna"
const repoCount = 50

console.log(name + repoCount + "value");// op: krishna50 value  //outdated

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`Hello my name is ${name.cat} and my repo count is ${repoCount}`); //or

// or
const gameName = new String('krishna')

console.log(gameName[0]); //K
console.log(gameName.__proto__);
console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //KRISHNA
console.log(gameName.charAt(4)); //h
console.log(gameName.indexOf('s')); //3


const newString = gameName.substring(0,4) 
console.log(newString); //kris //we can not use negative value.

const anotherString = gameName.slice(-7,2) 
console.log(anotherString); //kr ////we can  use negative value. it starts in reverse. (imp concept)

const newStringOne = " krishna "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "hhtps://krishna.com/krishna%20tripathy"
console.log(url.replace('%20','-'));



console.log(url.includes('krishna')) //true

console.log(gameName.split('-'));



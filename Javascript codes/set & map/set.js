const myArray = [1,2,3,4,5];
const mySet = new Set(myArray);

// console.log(myArray);
// console.log(mySet);

// const uniqueArray = [...mySet];
// console.log(uniqueArray);

// ADD

// mySet.add(6);
// mySet.add('6');
// mySet.add({channelName: 'JAVASCRIPT'});
// mySet.add([1,2,3]);
// console.log(mySet);


// DELETE

mySet.delete(3);
console.log(mySet);


// clear

mySet.clear();
console.log(mySet);

// hash
console.log(mySet.has(5));

// size
console.log(mySet.size);

console.log(myArray[3]);//4

console.log(mySet[3]);//undefined


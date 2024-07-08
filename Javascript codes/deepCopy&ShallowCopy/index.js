
// shallow copy
let developer1 = {name: 'krishna' }
let developer2 = developer1;
developer2.name = 'deepa';
console.log(developer1); //op: deepa
// console.log(developer2);//copy of the address of the developer1 //copy the reference

console.log(developer2); // op:  deepa



let developer3 = {name : 'mohan'}
let developer4 = Object.assign({},developer1);
console.log(developer3); //mohan
console.log(developer4); //deepa


// or
let developer2 = {...developer1}
// let developer2.name = 'banu';
console.log(developer1); //mohan
console.log(developer2); //deepa



// const tinderUser = new Object() //op: {}  //singleton object
const tinderUser = {} //op: {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularUser = {
    email : "kt@gmail.com",
    fullname : {
        userfullname: {
            firstname: "krishna",
            lastname: "tripathy"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"a" , 4: "b"}
const obj3 = {5:"a" , 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2);//both are same
// const obj4 = Object.assign({},obj1, obj2,obj3);
const obj4 ={...obj1, ...obj2} //spread operator
console.log(obj4);


// database shee value jab ayange
const users = [
   {
    id:1,
    email: "kt@gmail.com"
   },
   {
    id:2,
    email: "kt@gmail.com"
   },
   {
    id:3,
    email: "kt@gmail.com"
   },
   
]
users[1].email 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //property available hai ki nhi dekhta hai 

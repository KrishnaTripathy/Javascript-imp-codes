// function Addition(a,b,c){
//     return a+b+c;
// }
// let res = Addition(2,3,4);
// console.log(res); //op: 9


function Addition(a){
    return function(b) {
     return function(c){
        return a+b+c;
     }
    }
}
// let res = Addition(2);
// let data = res(4);
// let data1 = data(7);
// console.log(data1); //op: 13

// let res = Addition(2)(4)(7);
// console.log(res); //op: 13


//currying
userObj = {
    name: "Ajay",
    age:28
}
function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}
let res =userInfo(userObj);
console.log(res('name')()());

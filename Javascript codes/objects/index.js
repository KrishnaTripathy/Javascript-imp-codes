// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "krishna",
    "full name":"kt tripathy",
    // mySym : "mykey1",
    [mySym] :"mykey1",
    age:18,
    location: "bbsr",
    email: "kt@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); //type of string
console.log(JsUser[mySym]); //type of symbol

// Object.freeze(JsUser);
JsUser.email = "sa@gmail.com" //we can not chnage the tata its constant 
console.log(JsUser["email"]);



JsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(JsUser.greeting); //undefined freeze()
// function reference

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting()); // op: Hello JS user
console.log(JsUser.greetingTwo()); // op: Hello JS user krishna
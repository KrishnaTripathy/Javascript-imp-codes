var c=300;
if(true){
    let a= 10;
    const b=20;
    var c=30;
    c=30;// 30
}
console.log(a); // a is not defined
console.log(b);  //b is not defined
console.log(c);   // 30

// {} - it is called scope eg: function ya object ke sath aye 


let a=300
if(true){
    let a= 10;
    const b=20;
    var c=30;
    c=30;
    console.log("inner : ", a); //10
}
console.log(a); // 300
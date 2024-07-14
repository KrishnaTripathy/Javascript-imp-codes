//foreach give you one by one value 
// it will take one value at a time and that value will be assigned.

let nums = [42,51,24,98,78];

nums.forEach((n) => {
    console.log(n);
})


nums.forEach( n => {
    console.log(n);
})

nums.forEach((n,i,nums) => {
    console.log(n,i,nums);
})


var a = ["rahul", "krishna","sita"];
a.forEach(function(value){
    console.log(value);
})




a.forEach(loop);
function loop(value, index){
    console.log(index+ ":"+ value);
}
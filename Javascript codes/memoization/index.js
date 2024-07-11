//function call hone ke bad duri bar jab call ho fir shee ligic run na ho , wo result cache main jake store ho then call karne ke bad cache shee result aye.bar bar logic ko run nahi kar na hai i.e called memoization.
// optimise the code 

let sum = 0;
const calc = (n) => {
   for(let i=0; i<=n ;i++){
    sum+=i;
   }
   return sum ;
}

const memoize = (fun) => {
    let cache = {};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else{
            console.log("calculating first time");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}
console.time();
const efficient = memoize(calc);
console.log(efficient(5))
console.timeEnd();


console.time();

console.log(efficient(5))
console.timeEnd();
// calc(5);

// console.log(calc(5));

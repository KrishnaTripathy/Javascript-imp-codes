//perfect way

const radius = [3,1,2,4];

const area = function (radius){
    return Math.PI * radius * radius ;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2* radius;
};

const calculate = function (radius, logic){
    const output = [];
    for(let  i=0 ; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};


Array.prototype.calculate = function (logic){
    const output = [];
    for(let  i=0 ; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.map(area)); // both are same
console.log(radius.calculate(area)); // both are same

console.log(calculate(radius, area));  // both are same
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));





// Things learned:
// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// 5. If we use Array.property.function-name. This function is accessible to any array in your code.
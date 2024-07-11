// const array = [1,2,3]

// function addElementToArray(a,element){
//     a.push(element);
// }



// pure function
// it is not access anything  outside of it, can not access database 

const array = [1,2,3]

addElementToArray(array, 4)
[1,2,3,4]

function addElementToArray(a,element){
    // return [...a,element]
    return [...a,element, Math.random()]
}
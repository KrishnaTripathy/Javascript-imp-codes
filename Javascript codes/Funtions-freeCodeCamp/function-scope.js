function one(){
    const username = "krishna"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//website is not defined
    two()//krishna
}
one()




if(true){
    const username = "krishna"
    if(username === "krishna"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);//error
}
console.log(username);//error




function addone(num){
    return num + 1
}
addone(5) //6



addone(5) //6
function addone(num){
    return num + 1
}




const addTwo1 = function(num){
    return num + 2
}
addTwo1(5) //7



addTwo(5) //can not access addTwo before initialization
const addTwo = function(num){
    return num + 2
}

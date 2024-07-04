let btn1 = document.querySelector('#btn1');

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a= 25;
//     a++;
//     console.log(a);
// }

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
// };


// btn1.addEventListener("click", (e)=> {
//     console.log("hi namaste");
//     console.log(e);
// })
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// }

const handler3 = () => {
    console.log("button1");
    };
    btn1.addEventListener("click",handler3);
const handler4 = () => {
    console.log("button1");
   }
   btn1.addEventListener("click",handler4);
btn1.removeEventListener("click",handler3);
// create a toggle button that changes the screen to dark-mode when clicked and light mode when click again.

let modeBtn = document.querySelector('#mode');
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",() => {
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor= "white";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
});
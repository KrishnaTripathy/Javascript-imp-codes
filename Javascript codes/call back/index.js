setTimeout(function(){
    console.log("timer");
},5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});
//op: x y timer

function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked", ++count);
    });
}
attachEventListeners();

// Things learned:
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
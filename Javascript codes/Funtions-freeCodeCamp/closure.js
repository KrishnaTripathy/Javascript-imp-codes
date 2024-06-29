// closure & lexical scoping

function init() {
    let name = "krishna";
    function displayName() {
        console.log(name);
    }
    displayName();
}
init();



function x(){
    var a=7;
    function y() {
        console.log(a);
    }
    y();
}
x(); //7
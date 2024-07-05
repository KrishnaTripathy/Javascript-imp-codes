function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    y();
}
x();



//it is also correct
function x() {
    var a=function y() {
        console.log(a);
    };
    
    y();
}
x();



//it is also correct
function x() {
    var a=7;
    
    y();
}
x(function y() {
    console.log(a);
});



// imp example
function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();
//once you invoke x y will be return over here.
// op:ƒ y() {
//     console.log(a);
// }
// 7



//it also same
function x() {
    var a=7;
   return function y() {
        console.log(a);
    }
    
}
var z=x();
console.log(z);
z();




function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
console.log(z);
z();
// op: 100
// function along with the reference to that variable.






function z() {
    var b = 900;
    function x() {
        var a=7;
        function y() {
            console.log(a,b);
        }
       y();
    }
    x();
}
z();

// op: 7 , 900




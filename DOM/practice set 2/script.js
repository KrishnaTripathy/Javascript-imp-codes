// Q1.create a new button elment . Give it a text "click me", background color of red & text color of white.
//  let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

//  newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";



// q2. create a <p> tag in html , give it a class & some styling. now create a new class in css and try to append this class to the <p> element .
// how you overwrite the class name when you add a new one ?
// solve this problem using classList.


let para = document.querySelector("p");
console.log(para);
para.getAttribute("class");
// op: content

para.setAttribute("class", "newClass");
//op: undefined

//correct way
// para.classList.add("newClass");
// para.classList.remove("newClass");


// document.querySelector("body").prepend(newBtn);
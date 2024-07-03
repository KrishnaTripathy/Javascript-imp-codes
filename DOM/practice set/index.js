// create a H2 heading element with text - "Hello JavaScript".Append "from apna college students" to this text using js.
// 1.access element
// 2.property - change

// let h2= document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText =h2.innerText+ "from apna college students"; //concatinate

// create 3 divs with common class name - "box". access them & add some unique text to each of them.
 let divs = document.querySelectorAll(".box");
 console.log(divs[0]); //nodelist array ki taraha work kar rahi hai

 let idx = 1;
 for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
 }

//  or
//  div[0].innerText = "new unique";
//  div[2].innerText = "new unique 2";
//  div[1].innerText = "new unique 1";

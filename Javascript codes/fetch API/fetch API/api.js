const URL = "https://dog.ceo/api/breeds/image/random";

// let promise = fetch(URL);
// console.log(promise);

const factPara =document.querySelector("#fact");
const btn = document.querySelector('#btn');

//better to do

// const getFacts = async () => {
//     console.log("getting data ...");
//     let response = await fetch(URL);
//     // console.log(response.status);
//     console.log(response);//JSON format
//     let data = await response.json();//readable format
//     // console.log(data[0].text);
//     factPara.innerText = data[0].text;
// };


//or
function getFacts() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data)=> {
            console.log(data);
            factPara.innerText = data[2].text;
        });
    }




btn.addEventListener("click", getFacts);
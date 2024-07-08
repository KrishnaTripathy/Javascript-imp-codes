const marvel_heros = ["thor", "Ironman", "spider"];
const dc_heros = ["superman","flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// spread it is better as compare to concat.

const all_new_heros = [...marvel_heros , ...dc_heros];
console.log(all_new_heros);


// flat
const another_array = [1,2,3,[4,5,6],7,8,9,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); //op: (13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 4, 5]


console.log(Array.isArray("kthkkddkld")); //false
console.log(Array.from("kthkkddkld"));  //['k', 't', 'h', 'k', 'k', 'd', 'd', 'k', 'l', 'd'
console.log(Array.from({name: "krishna"})) //[] //imp for interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //100,200, 300

//read about isArray, of,from
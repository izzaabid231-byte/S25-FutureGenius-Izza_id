const marval_Heros = ["thor", "ironman", "spiderman"]
const dc_Heros = ["superman","flash","batman"]

// marval_Heros.push(dc_Heros) //arrays take any value from the data thats why it take array itself 

// console.log(marval_Heros);
// console.log(marval_Heros[3][1]);

//************* concat method***************8
// const allHeros = marval_Heros.concat(dc_Heros)
// console.log(allHeros);

//***************spread method************
// const all_new_heros = [...marval_Heros, ...dc_Heros]
// console.log(all_new_heros);

//concat & spread both are same but mostly programers use spread method 

//******************rarly used************
const another_array = [1, ,2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // when we want to show multiples of array in sequance we use flat
console.log(real_another_array);

console.log(Array.isArray("Alizay")); // Is alizay is an array? we ask the Question in this line
console.log(Array.from("Alizay")); // if alizay is not an array (from) is use to make it an array
console.log(Array.from({name: "Alizay"})); // if it can't make an array it always gives empty array 
// (humy btana prta hai k keys(name) say array bno ya phir values(that written in "")say array bno)


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
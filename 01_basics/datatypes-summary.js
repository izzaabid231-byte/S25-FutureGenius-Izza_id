// 1- Primitted (call by value)
// 7-types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// when we want to declare a variable we use (let)

// symbols
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// bigInt
const bigNumber = 3546571267684765278n


// 2- Non-Primitive (call by referance)
// 3-types : Array, Objects, Functions

// Array
const heros = ["Supiderman", "Batman", "CaptainAmarica"]

// objects
// {
//     name: "Izza Abid",
//     age: 23,
// }
// we also store this into a variable like
let myObj = {
    name: "Izza Abid",
    age: 23,
}

// Funtions
// 1-variable
const myFunction = function(){
    console.log("Hello world");    
}
console.log(typeof outsideTemp);

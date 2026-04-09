let score = "Izza"
// console.log(typeof score)
// console.log(typeof (score))


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => false

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false 
// "izza" => true

let someNumber = 44
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************************  Operations  ************************

let value = 4
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2) => remainder

let str1 = "operations"
let str2 = "Izza"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)  //if strings comes in start remaining numbers also treated as a string
// console.log(1 + 2 + "2")  //if strind comes at end remaining numbers cannot treated as a string 

// console.log(3 + 4 * 5 % 3); //this is wrong way to write a program 
// console.log(((3 + 4) * 5) % 3); //use brackets


// console.log(+true);  //wrong way
// console.log(+"");  //wrong way


let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameConter = 100
++gameConter;
console.log(gameConter);
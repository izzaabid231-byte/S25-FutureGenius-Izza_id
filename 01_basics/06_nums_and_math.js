const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 23.465723
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(1));


const hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'));


// ********************************* MATHS **************************//

// console.log(Math);
// console.log(Math.abs(-4));    //abs=>absolute value (+ve value +ve he rahti hai) sirf -ve value change hoti hai.
// console.log(Math.round(8.3676));   
//agr hum chahty hain k round off value uper jay to (ceil) use krty hain 
//agr hum chahty hain k round off ho k lowest value jay to (floor) use krty hain
// console.log(Math.ceil(8.3676));   
// console.log(Math.floor(8.3676));  
// console.log(Math.min(8, 3, 67, 6));  
// console.log(Math.max(8, 5, 12, 9));  


console.log(Math.random());  // always give value between 0 and 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)
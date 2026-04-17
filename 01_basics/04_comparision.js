//basic conversion 
//  console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" >= 1);

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
// the reson is that an quality check == and comparisions > < >= <= works diifferently 
// in this case comparision convert null into a number (0) thats why (11,13) are false and (12) is true

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// strickly check (===)
console.log("2" === 2);

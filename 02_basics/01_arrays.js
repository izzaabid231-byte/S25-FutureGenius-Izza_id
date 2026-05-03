//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Superman", "Batman", "Spiderman"]
const myArr2 = (0, 1, 2, 3, 4, 5)
// console.log(myArr[1]);

//array Mathod

//For Adding Values
// myArr.push(6)
// myArr.push(7, 8)
//for removing last value and don't need to give any parameter
// myArr.pop()

//for adding value in first
// myArr.unshift(8)
//for removing value from first
// myArr.shift() 

//In such methods we only ask questions 
// console.log(myArr.includes(9)); //we ask to tell that 9 is in the array (result in boolean)
// console.log(myArr.indexOf(9)); 

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//Slice and Splice

console.log("A", myArr); //orignal array

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);





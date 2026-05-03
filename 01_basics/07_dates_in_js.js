// Date
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2037, 4, 2)
// let myCreatedDate = new Date(2037, 0, 2, 5, 3)
// let myCreatedDate = new Date("2037-01-14")  ("yy-mm-dd")
let myCreatedDate = new Date("01-04-2037")
// console.log(myCreatedDate.toLocaleString());


//+++++++++++++++++++++++++++  Time Stamps  ++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));   //****************  convert in secounds  *********************


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default', {
    weekday: "long"
}) //we define object and aloot of parameter in it 

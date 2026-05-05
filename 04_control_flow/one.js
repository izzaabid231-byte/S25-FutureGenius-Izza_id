//if //condition true hogi to scope execute ho ga //false ho gi to scope ececute ni ho ga
// <, >, =>, =<, ==, !=, !==, === //also check the typeof


// const temperature = 41
// if (temperature === 40){
//     console.log("less than 50");
// } 
// console.log("temperature is grater than 50");

//line 7 or 9 main say koi ek print krvany k liyy else use kry gy
// const username = true
// const temperature = 41
// if (temperature === 51){
//     console.log("less than 50");
// }else{
//     console.log("temperature is grater than 50");
// }

// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);


//+++++++++++++++++++++ Neasted +++++++++++

// const balance = 1000
// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less then 750");

// } else if (balance < 600) {
//     console.log("less then 600");

// } else {
//     console.log("less than 5000");
    
// }



//----------------------------------

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}



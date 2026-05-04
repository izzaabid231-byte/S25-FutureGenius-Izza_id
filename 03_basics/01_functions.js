//general syntax of function
// function myName() {
//     console.log("I");
//     console.log("Z");
//     console.log("Z");
//     console.log("A");
// }
// myName()


// function addTwoNumbers(num1, num2){    //it can't give us return value
//     console.log(num1 + num2);
    
// }
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 10)
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){  //it runs when our statement is true
    //     console.log("Please enter your name");
    //     return
    // }
// we come in this section when user cannot passs any value
    if(!username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("izzaabid"));
// console.log(loginUserMessage());


function calculateCartPrice(value1, value2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 5000, 10000));

// objects in function**************
const user ={             // (45-48) lines are object
    username: "Izza",
    price:789
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Alizay",
    price: 5667
})

// array in function**********
const myNewArray = [2000, 700, 599, 300]
function returnSecoundValue(getArray){
    return getArray[1]
}
// console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([2000, 700, 599, 300]));

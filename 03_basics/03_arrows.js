const user = {
    username: "Izza",
    price: 620,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "salma"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "Izza"
//     console.log(this.username);
    
// }
// chai()


// const coffee = function() {
//     let username = "Izza"
//      console.log(this.username);
// }
// coffee()

const coffee = () => {
    let username = "Izza"
      console.log(this.username);
}
coffee()

//basic syntax of arrow funtion is () =>{}

//basic arrow function   
//explecet return 
// const addThree = (num1, num2, num3 ) => {
//     return num1 + num2 + num3
// }
// console.log(addThree(3, 5, 4));


// another way to write, that called implecet return
// implecet return
// const addThree = (num1, num2, num3 ) =>  (num1 + num2 + num3)
const addThree = (num1, num2, num3 ) =>  ({username: "Izza"})
console.log(addThree(3, 5, 4));
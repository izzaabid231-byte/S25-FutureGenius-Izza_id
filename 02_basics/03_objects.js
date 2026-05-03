// Singleton => constructor say jb bnaty hain to singleton(yani ye apni trha ka ek he hai) ek object bnta hai 
//object.create => singletone is main bnta hai

//object Literals

const mySym = ("key1")

const JsUser = {
    name: "Alizay",
    "full name": "Alizay Ahsan",
    //  mySym: "myKey1", // yahan key string ki trha use ho rahi hai
    [mySym]: "myKey1", //symble ki trha use krny k liyy is trha likhty hai 
    age: 25,
    location: "Lahore",
    email: "izzaabid786@gmail.com",
    isLoggedIn: false,
    lastLoggrdIn: ["Monday", "Sunday"]
}

// console.log(JsUser.email); // mostly we use this
// console.log(JsUser["email"]);
// // console.log(JsUser.[full name])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//overwrite/change the values with the hepl of =
JsUser.email = "alizayahsan123@gmail.com"

// noone can change the value we use
// Object.freeze(JsUser) 
JsUser.email = "alizayahsan123@chatgpt.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js users");
}
// console.log(JsUser.greeting); // function ka refferance ata hai function execute ni hota
// console.log(JsUser.greeting());

// object k under kisi string ko refer krny k liyy

JsUser.greetingtwo = function(){
    console.log(`Hello Js users, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


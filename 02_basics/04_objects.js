//const tinderUser = new Object()  //==>singleton object
const tinderUser = {}   //==> non singleton object

tinderUser.id = "3467"
tinderUser.name = "Izza"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "izzaabid345@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "Izza",
            lastname: "Abid"
        }
    }
}

// console.log(regularUser.fullname.Userfullname.firstname);

//combine the object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2,) => value assign krny k liyy

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "izzaabid345@gmail.com"
    },
    {
        id: 1,
        email: "izzaabid345@gmail.com"
    },
    {
        id: 1,
        email: "izzaabid345@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// dstructuring

const course = {
    coursename: "javaScript",
    courseInstructor: "hitesh",
    price: "1200"
}
const {courseInstructor} = course
console.log(courseInstructor);
const {coursename: subject} = course
console.log(subject);

//  Apis
//     //jyson format (all apis in jayson)
// // {
// //     "name": "Izza"
// //     "coursename": "javascript"
// //     "price": "free"
// // }
[
    {},
    {},
    {}
]

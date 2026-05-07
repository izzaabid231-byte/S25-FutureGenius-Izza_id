const userEmail = []

if (userEmail) {
    console.log("GOt user email");
    
} else {
    console.log("Don't have user email");
    
}


if (userEmail.length ===0) {
    console.log("Array is empty");
    
}

// Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
// "0", 'false', " ", [], {}, function(){} 
// string k under koi bhi value enter ho gai vo truthy value bn jati hai


const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined
val1 = 4 ?? 8
val2 = 7 ?? 20
val3 = null ?? 30
val4 = undefined ?? 15
val5 = null ?? 40 ?? 70
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);


//Terniary Operator -----  condition ? true : false

const iceTeaPrice = 1000
iceTeaPrice <= 800 ? console.log("less than 800") : console.log("more than 800");



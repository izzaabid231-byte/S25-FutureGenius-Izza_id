// for loop

for ( let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is the best number");    
    }
    // console.log(element);
}

for (let l = 0; l <= 10 ; l++) {
    // console.log(`Outer loop value; ${l}`);
    for (let k = 0; k <= 10 ; k++) {
        // console.log(`Inner loop value: ${k} and inner loop ${l}`);
        //console.log(l + '*' + k + '=' + l*k);
    }
}

let myArry = ["batman", "superman", "ironman"]
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    //console.log(element); 
}


// break(to stop the loop in between ) and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 15) {
//         console.log(`Detected 15`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 15) {
        console.log(`Detected 15`);
        continue
    }
    console.log(`Value of i is ${index}`);
}
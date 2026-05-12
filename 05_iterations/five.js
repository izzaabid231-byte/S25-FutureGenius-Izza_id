//for-each-loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// basic function
// coding.forEach( function (items) {
//     console.log(item);
    
// } )

//arrow functuion
// coding.forEach((value) => {
//     console.log(value);
    
// })


// (printme) isko jo bhi dyty hain vo print kr dyta hai
function printme(item) {
    //console.log(item);
    
}

coding.forEach(printme )

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: "java",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "C++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding .forEach( function (items) {
    console.log(`${items.languageName} ${items.languageFileName}`);
    
    
} )


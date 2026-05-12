//const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })
// console.log(value);      // foreach-loop can't return any value


// filter-loop (it returns the value)
//basic
// const myNums = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]
// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums);


const myNums = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 5
// })


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 3) {
//         newNums.push(num)
//     }
// });

// console.log(newNums);



const course = [
    {
        title: "English", type: "compulsory", publish: 1981, edition: 2004
    },
    {
        title: "Urdu", type: "compulsory", publish: 1992, edition: 2008
    },
    {
        title: "Physics", type: "elective", publish: 1999, edition: 2003
    },
    {
        title: "Chemistry", type: "elective", publish: 2000, edition: 2015
    },
    {
        title: "Mathematics", type: "compulsory", publish: 1987, edition: 2010
    },
    {
        title: "Computer", type: "elective", publish: 2009, edition: 2014
    },
    {
        title: "Islamiyat", type: "compulsory", publish: 2011, edition: 2020
    },
    {
        title: "Terjma-tul-Quran", type: "compulsory", publish: 1989, edition: 2005
    },
    {
        title: "History", type: "elective", publish: 1969, edition: 2012
    },
    {
        title: "Geography", type: "elective", publish: 2007, edition: 2017
    }
]

// const course9 = course.filter( (bk) => bk.type == "compulsory" )
// const course9 = course.filter( (bk) => bk.type == "elective" )
const course9 = course.filter( (bk) => { 
    return bk.publish >= 2000 && bk.type == "compulsory"  } )
console.log(course9);

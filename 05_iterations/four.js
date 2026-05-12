//for-in-loop work on object 

const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
   // console.log(`${key} schortcut is ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "py", "java", "c", "react"]
for (const key in programming) {
    console.log(programming[key]);
    
    
}

// const map = new Map()
// map.set('PAK', "Pakistan")
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('GEM', "Germany")

// for (const key in map) {
//     console.log(key);  
// }


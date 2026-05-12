//for-of-loop work on arry

["", "", ""]  // string array
[{}, {}, {}]  //object array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
    
}


const greetings = "Hello worl!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
   
}

//map (it have unique address & it have not any dublicate value/ address)

const map = new Map()
map.set('PAK', "Pakistan")
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('GEM', "Germany")
//console.log(map);


//for loop in map

for (const [key, value] of map) {
    //console.log(key, '=>', value);
    
}

//object in map

const myObject = {
    game1: 'ALIZAY AHSAN',
    game2: 'Batman'
}

//the for-of-loop is not working on object
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }      


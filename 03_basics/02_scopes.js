//outside the block scope all area is globle scope


let a =300
if (true){        //this is block scope is main say koi bhi cheez globle scope main ni ani chahiye problem kry gi
    let a = 10
    const b =20 
    // console.log("inner:", a); 
}
//console.log(a);
// console.log(b);


//****************Neasted Scope */
function one(){
    const username = "Alizay"
    function two(){
        const website = "Instagram"
        console.log(username);
    }
    //console.log(website);

    two()
    
}
// one()

if(true){
    const username = "alizay"
    if(username === "alizay"){
        const game = "gtay city"
        // console.log(username + game);
    }
    // console.log(game);
    
}
// console.log(username);


// ++++++++++++++++ Intresting ++++++++++++

addone(5)
function addone(num) {
    return num + 1
}


addtwo(5)
const addtwo = function (num) {     //this is also a function but sometimes it called expretion
    return num + 2
}

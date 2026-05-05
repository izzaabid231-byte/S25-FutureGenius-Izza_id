//Immediatly Invoked Function Expressions (IIFE)

//named iffe
(function chai(){
    console.log(`DB CONNECTED`);
}());

//un named iffe
( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`${name}`);
})('Izza')
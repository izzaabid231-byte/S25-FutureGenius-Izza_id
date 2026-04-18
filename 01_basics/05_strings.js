const name = "Izza"
const repoCount = 70
const age = 23

// console.log(name + repoCount + "value"); old hai or aj k dor main esy koi ni likhta

console.log(`Hello my name is ${name} and my repo count is ${repoCount} and my age is ${age}`); //always use this syntax

const gameName = new String('alizay-hc')

// methods/syntax for acsses key values
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.lenght);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4) //-ve value ni dyy skty agr dyy gy bhi to vo ignore krdy ga or 0 say start kry ga
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   izza   "
console.log(newStringOne);
console.log(newStringOne.trim());  //extra space khutum krny k liyy

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('hitesh', 'izza'));
console.log(url.includes('izza'));
console.log(gameName.split('-'));


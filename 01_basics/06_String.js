const name = "veer"
const repoCount = 50

//console.log(name+ repoCount + " Value " );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('veerkumar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 5)
console.log(anotherString);

const newStringOne = "  veer  "
console.log(newStringOne);
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://veer.com/veerkumr%20yadav"
console.log(url.replace('%20', '-'))

console.log(url.includes('veer'))

console.log(gameName.split('-'));
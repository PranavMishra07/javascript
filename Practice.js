// let x = null;
// console.log(x);//null

let y
console.log(y);//undefined

const obj = {}
console.log(obj.age);//undefined

function noReturn() { }
console.log(noReturn()); //undefined


console.log(typeof (undefined));//undefined

console.log(typeof (null));//Object


let user;
console.log(user); //undefined
let activeuser = null
console.log(activeuser);//null
console.log(activeuser);//null




function calculate(a, b) {
    debugger; //execution stops here
    return a + b
}
calculate(5, 10)

var x = 10
debugger;
x = x + 1
debugger
console.log(x)
console.log(x)


console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(0 == false); // true (false is converted to 0)
console.log(null == undefined); // true (special case)


console.log(5 === "5");// false (different types: number vs. string)
console.log(null === "0");
console.log(0 === false); // false (number vs. boolean)
console.log(null === undefined); // false (different types)


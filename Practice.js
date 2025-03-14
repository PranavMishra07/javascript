let x = null;
console.log(x);//null

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




function calculate(a, b) {
    debugger;
    return a + b
}
calculate(5, 10)

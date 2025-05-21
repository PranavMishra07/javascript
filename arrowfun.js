let arrow = () => { return "name" }
console.log(arrow());
let a = 10
let add = () => (a + a)
console.log(add());
// let n = 5
// let fun = () => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(n * i)
//         }
// }
// fun()
let m=6
let sun =()=>{
    for(j=1;j<=10;j++){
         console.log(m*j);
    }
}
sun()
// ;

let f = 5
let fac = 1
let fact = () => {
    for (let i = f; i >= 1; i--) {
        fac = fac * i;
        console.log(fac)
    }
}
fact()

const n= 6
let facto=1
let factorial=()=>{
    for (let i=n;i>=1;i--){
        facto=facto*i;        
    }
    console.log(facto);
}
factorial()
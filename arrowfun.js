let arrow = () => { return "name" }
console.log(arrow());
let a = 10
let add = () => (a + a)
console.log(add(a));
let n = 5
let fun = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i)

    }
}
fun()
let f = 5
let fac = 1
let fact = () => {
    for (let i = f; i >= 1; i--) {
        fac = fac * i;
        console.log(fac)
    }
}
fact()

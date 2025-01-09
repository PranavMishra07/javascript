// let num = Math.trunc(Math.random() * 15 + 1)  // trunc for integer value
// // *15 number
// // +1 for not
// console.log(num);
const number = () => {
    let h1 = document.querySelector("#h1")
    let h2 = document.querySelector("#h2")
    let h3 = document.querySelector("#h3")
    h1.innerHTML = Math.trunc(Math.random() * 10000 + 1)
    h2.innerHTML = Math.trunc(Math.random() * 15 + 1)
    h3.innerHTML = Math.trunc(Math.random() * 15 + 1)


}
// function one() {
// h1.innerHTML = Math.trunc(Math.random() * 15 + 1)
// }
// function two() {
//     h2.innerHTML = Math.trunc(Math.random() * 15 + 1)

// }
// function three() {
//     h3.innerHTML = Math.trunc(Math.random() * 15 + 1)
// }






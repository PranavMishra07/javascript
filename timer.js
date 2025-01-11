let st
function start() {
    let head = document.querySelector("#head")
    let num = 0;
    st = setInterval(() => { head.innerHTML = num++ }, 1000)   // 1000 1second     infinite time call
}
let r = setInterval(() => {
    document.write("ello")
})
clearInterval(r)
function stop() {
    clearInterval(st)
}
setTimeout(() => alert("settimeout Call"), 2000)    //only once call

let btn = document.querySelector(".btn")
//           first event name, function
btn.addEventListener('click', function () { alert("clicked") })

function show() {
    let heading = document.querySelector("#heading")
    heading.innerHTML = "Cybrom"
}
function hide() {
    let heading = document.querySelector("#heading")

    heading.innerHTML = ""
}
let status = false
function toggle() {
    let h = document.querySelector("#head")
    let btn = document.querySelector("#but")
    status = !status
    if (status) {
        h.innerHTML = "cybrom"
        btn.innerHTML = "Show"
    }
    else {
        h.innerHTML = ""
        btn.innerHTML = "Show"
    }



}





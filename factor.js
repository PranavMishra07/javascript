function submit() {
    let i
    let input = document.querySelector("#fact").value
    for (i = 0; i <= input; i++) {
        if (input % i == 0) {
            console.log(i);


        }
    }
}

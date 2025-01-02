function obj() {
    let obj = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        contact: document.querySelector("#contact").value,
        address: document.querySelector("#address").value
    }
    console.log(obj);
    console.log(obj.name);

    return false

}
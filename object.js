//for multiple data store {} ,unorderd,key value pair main
// access member operator . (dot)
// let ob = {
//     name: "prince",
//     age: 34,
//     stack: "FSD",
//     contact: 12313324,
//     address: "Piplani",
// // }
// console.log(ob);
// console.log(ob.name);

// for (let k in ob) {
//     console.log(k); //for printing keys
//     console.log(ob[k]);    //for printing value

// }
function submit() {
    let obj = {
        name: document.querySelector("name").value,
        age: document.querySelector("#age").value,
        contact: document.querySelector("#contact").value,
        address: document.querySelector("#address").value,

    }
    console.log(obj)
    return false




}

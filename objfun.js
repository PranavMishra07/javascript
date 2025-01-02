// In JavaScript, an object is a collection of key-value pairs (often referred to as properties), where the key is a string (also called a property name) and the value can be any data type, including other objects, arrays, or functions.
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
let obj1 = {
    name: "parent",
    contact: 12345   //
}
obj1.city = "bhopal"  // add key
obj1.contact = 2223   //edit number
console.log(obj1);

let emp = {
    emp_name: "Aaditya",
    emp_id: 201,
    emp_age: 21,
    emp_designation: "Developer",
    emp_account: {
        emp_salary: 15000,
        emp_bankname: "SBI",
        emp_acbalance: "Rs 4/- Only"
    }

}
console.log(emp.emp_account);

console.log(emp.emp_account.emp_acbalance);

let obj2 = {
    name: "Anuj",
    demo: function () {   //function
        alert("inside Object")
    },
    friend: ["harsh", "aman", "prabal", "himanshu"],  //araay
    fun: function () {
        console.log(this.name);

    }
}
obj2.demo()
obj2.fun()
console.log(obj2.friend[0])


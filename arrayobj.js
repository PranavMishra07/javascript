let employee = [
    {
        emp_id: 1,
        emp_name: "Chanchal Sir",
        emp_designation: "Technical Trainer"
    },
    {
        emp_id: 2,
        emp_name: "Ram Sir",
        emp_designation: "Technical Trainer"
    }
]
let obj1 = {
    name: "Shashank",
    Age: 22,
    designation: "developer"
}
e=employee.push(obj1)
console.log(employee);


let obj2 = {
    name: "Aman",
    Degree: "BSC",
    Age: 21

}
console.log(employee.push(obj2))

console.log(employee);
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee.push({
    name: "Pranav",
    emp_id: 23,
    emp_designation: "develapor"
}));
console.log(employee.pop())
console.log(employee.unshift(
    {
        name: "aryan",
        emp_id: 23,
        emp_designation: "software develapor"
    }
));
console.log(employee.slice(0, 3));
console.log(employee);


console.log(employee.splice(1, 3));
console.log(employee);
console.log(employee);

// foo(); // "Hello!"
// function foo() {
//     console.log("Hello!");
// }


// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 5;









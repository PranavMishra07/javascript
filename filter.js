// The filter() function creates a new array with all elements that pass the test implemented by the provided function. It removes elements that don't satisfy the condition and returns a new array with only the elements that do.
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
console.log(ar);


let neu = ar.filter((t) => { return t > 2 })
console.log(neu);


let nar = ar.filter((f) => { return f % 2 == 0 })
console.log(nar);

let Student = [
    {
        Name: "Himanshu",
        id: 1,
        age: 20,
        designation: "developer"
    },
    {
        Name: "Satyam",
        id: 2,
        age: 18,
        designation: "asistant"
    },
    {
        Name: "Arpit",
        id: 3,
        age: 16,
        designation: "manager"
    }

]
let stu = Student.filter((stu) => { return stu.age >= 18 })
console.log(stu);

console.log(Student);
let sn = Student.map((sn) => { return sn.age > 18 })
console.log(sn);


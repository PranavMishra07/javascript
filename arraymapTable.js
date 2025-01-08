let student = [
    {
        Roll: 1,
        name: "Rahul",
        age: 5,
        city: "Bhopal "
    },
    {
        Roll: 2,
        name: "Shivam",
        age: 28,
        city: "Gurgaon "
    },
    {
        Roll: 3,
        name: "Satyam",
        age: 43,
        city: "Delhi "
    },
    {
        Roll: 4,
        name: "Anmol",
        age: 9,
        city: "Shahpur "
    },



]
let finaldata = student.map((e) => `
<tr>
<td>${e.Roll}</td>
<td>${e.name}</td>
<td>${e.age}</td>
<td>${e.city}</td>

</tr>



`).join("")
document.querySelector("#displaydata").innerHTML = finaldata
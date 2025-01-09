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
//to add table data in the table   use ${} to access data from the above array Object
let finaldata = student.map((e) => `    // e is the object of arrow Function 
<tr>
<td>${e.Roll}</td>   
<td>${e.name}</td>
<td>${e.age}</td>
<td>${e.city}</td>

</tr>



`).join("")     // To remove ,(qoama) or replace it  (because of Object there is qouma occure in the table)
document.querySelector("#displaydata").innerHTML = finaldata  //add data to Html Page 
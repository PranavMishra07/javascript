let ar = [1, 2, 3, 4, 5, 6, 7]
// let neu = ar.map((t) => { return t })
// let neu = ar.map((t) => { return t + 2 })
// let neu = ar.map((t) => { return t * 2 })
let neu = ar.map((t) => { return t > 2 })


//only on array   to fetch elements of array
console.log(neu);


let nar = ar.filter((f) => { return f % 2 == 0 })
console.log(nar);


let arr1 = [
    {
        id: 1,
        Name: "Atul",
        Age: 21
    },
    {
        id: 2,
        Name: "viplob",
        Age: 30,
    },
    {
        id: 3,
        Name: "avinash",
        Age: 12
    }

]
let st = arr1.map((s) => { return s.id })
console.log(st);

let st_filter = arr1.filter((f) => { return f.Age > 20 })
console.log(st_filter);



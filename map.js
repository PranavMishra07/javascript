// The map() function creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array; instead, it returns a new array with the transformed elements.
let ar = [1, 2, 3, 4, 5, 6, 7]
// let neu = ar.map((t) => { return t })
// let neu = ar.map((t) => { return t + 2 })
// let neu = ar.map((t) => { return t * 2 })
let neu = ar.map((t) => { return t > 2 })


//only on array   to fetch elements of array  and when we give map a condition it returns boolean result
//
console.log(neu);
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
// let st = arr1.map((s) => { return s.Name })
let st = arr1.filter((s) => { return s.Name })
console.log(st);





let ar1 = [1, 2, 3]
let ar2 = [4, 5, 6]
let ar3 = [...ar1, ...ar2]
console.log(ar3);
//sprad operator for merging  array 

// slice() function for taking a slice of an array for 
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
let del = arr.slice(1, 5)
console.log(del)
console.log(arr);

//splice()  function for deleting and adding an element of array

arr.splice(1, 4)
console.log(arr)
arr.splice(1, 0, "cose", "adas")
console.log(arr)

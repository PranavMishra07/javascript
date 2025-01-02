// Arrays: The spread operator spreads the elements of an array into another array.
// Objects: It copies or merges properties of objects.
// Function Calls: It spreads elements of an array into individual function arguments.
let ar1 = [1, 2, 3]
let ar2 = [4, 5, 6]
let ar3 = [...ar1, ...ar2]
console.log(ar3);
// The slice() function in JavaScript is used to extract a shallow copy of a portion of an array or a string without modifying the original array or string. It returns a new array or string that contains elements or characters from the original array/string, starting from the specified start index and optionally ending at the end index.
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
let del = arr.slice(1, 5)
console.log(del)
console.log(arr);
//The splice() method in JavaScript is used to modify an array by adding, removing, or replacing elements at a specific index. Unlike the slice() method, which creates a shallow copy of a portion of the array, splice() directly changes the original array.
arr.splice(1, 4)
console.log(arr)
arr.splice(1, 0, "cose", "adas")
console.log(arr)

// Write a program to take ten integer input from the user and print some of all odd numbers in an Array
let arr = []
let sum = 0
for (let i = 0; i < 10; i++) {
    arr[i] = parseInt(prompt("Enter Number : "))
    if (i % 2 == 0) {
        sum = sum + arr[i];
    }
    console.log("\n", sum)
}

// push function main elements array main last mai add ho jayenge
arr.push("pra", 90)
console.log(arr)
//pop function last se element  runtime par delete karta hai
arr.pop("90")
console.log(arr)
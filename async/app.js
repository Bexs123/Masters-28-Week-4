//Example
let a = 1
let b = 2
let c = 3
let d = 4

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//Qs. In what order are things printed to the console?
//A. 1, 2, 3, 4


//Example
//Using a function called setTimeOut() to simulate a function taking ages.
let a = 1
let b = 2
let c = 3
let d = 4

console.log(a)

setTimeout(() => {
    console.log(b)
}, 2000)
console.log(c)
console.log(d)
// By using the human eye you could not really tell that they where a delay.


//Example
let a = 1
let b = 2
let c = 3
let d = 4

console.log(a)

setTimeout(() => {
    console.log(b)
}, 2000)

setTimeOut (() => {
    console.log(c)
}, 0)
console.log(d)
//Again you could not really tell that they where a delay


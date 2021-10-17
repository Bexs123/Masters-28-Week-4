//Example 1
let a = 1
let b = 2
let c = 3

console.log(a)

const myFunction = () => {
    console.log(b)
    console.log(c)
}

myFunction ()
//Answer it wll return 1, 2, 3


//Example 2
let a = 1
let b = 2
let c = 3

console.log(a)

const myFunction = () => {
    let d = 4
    console.log(b)
    console.log(d)
}

myFunction()
console.log(d)
//Answer the result is d is not defined


//Example 3
let a = 1
let b = 2
let c = 3

console.log(a)
console.log(c)

const myFunction = () => {   //myFunction Scope
    console.log(b)

    const myFunction2 = () => {  //myFunction2 Scope
        let d = 4
        console.log(c)
        console.log(d)
    }

    myFunction2()
    console.log(c)
    console.log(d)
}

myFunction()
//Answer ReferenceError d is not defind


//Example 4
let a = 1
let b = 2
let c = 3

console.log(a)
console.log(c)

const myFunction = () => {
    console.log(b)

    if(true) {
        let d = 4
        console.log(d)
    }
    console.log(d)
}
myFunction()
// Answer ReferenceError d is not defined


//Example function which take a function as a parameter
let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}

let greet = (time, fn) => {
    if(time < 12) {
        fn("Morning")
    } else if (time > 12 && time < 18) {
        fn("Afternoon")
    } else {
        fn("Evening")
    }
}

greet(14, whichGreeting)
//Answer Returns Good Afternoon


//The difference bewteen invoking a function and referencing a function
let add = () => {
    return 2 + 3
}

add () //Returns 5
add // without the brackets just holds a reference the function
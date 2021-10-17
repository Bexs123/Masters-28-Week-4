// Challenge 4

// Test this function to make sure it works by passing a number to the doMath function, then passing a number and one
// of the four maths functions, to the returned function.

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide = (a,b) => {
    return a/b
}

const subtract = (a,b) => {
    return a-b
}

const doMath = (num1)=> {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}
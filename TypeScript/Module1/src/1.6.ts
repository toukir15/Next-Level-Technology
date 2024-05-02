// Fuction 

// 1. normal fuction 
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(1, 2)

//2. arrow function
const multiple = (num1: number, num2: number): string => {
    return `Result is ${num1 * num2}`
}

const arr: number[] = [5, 8, 10, 98]


// mapping 
const newArray: number[] = arr.map((element: number): number => element * element)
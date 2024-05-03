{

    // learning type and interface 
    //

    // type 
    type User1 = {
        name: string;
        age: number;
    }

    type User1WithRole = User1 & { role: number }

    const user1: User1WithRole = {
        name: "Toukir",
        age: 21,
        role: 1,
    }

    // interface 
    interface User2 {
        name: string;
        age: number;
    }

    interface User2WithRole extends User2 { role: number }

    const user2: User2WithRole = {
        name: "Toukir",
        age: 21,
        role: 1,
    }

    // type and interface with array 
    type Array1 = number[]
    interface Array2 {
        [index: number]: number
    }
    const array1: Array1 = [1, 2, 3]
    const array2: Array2 = [1, 2, 3]

    // type and interface with function 
    type Add = (value: number) => number
    interface Remove {
        (value: number): number
    }
    const add: Add = (value) => {
        return value
    }
    const remove: Remove = (value) => {
        return value
    }

    //
}
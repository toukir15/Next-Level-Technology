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
    //
}
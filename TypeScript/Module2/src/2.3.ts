{
    // learning generic type 
    //
    type genericArray<type> = Array<type>
    const numberArray: genericArray<number> = [1, 2, 3]
    const stringArray: genericArray<string> = ["x", "y", "z"]
    const booleanArray: genericArray<boolean> = [true, false, true]

    const user1: genericArray<{ name: string, roll: number }> = [
        {
            name: "Toukir",
            roll: 5,
        },
        {
            name: "Shiam",
            roll: 6,
        },
    ]


    // generic tuple 
    type genericTuple<X, Y> = [X, Y]
    const cupple: genericTuple<string, string> = ["x", "y"]

    const userWithID: genericTuple<number, { name: string, roll: number }> = [21363, { name: "Toukir", roll: 41 }]
    //
}
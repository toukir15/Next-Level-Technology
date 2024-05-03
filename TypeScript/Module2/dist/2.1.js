"use strict";
{
    // type assertion 
    // => Type assertion meaning when you know better type than typescript then it's called type assertion
    const kgToGm = (value) => {
        if (typeof value == "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if (typeof value == "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
}

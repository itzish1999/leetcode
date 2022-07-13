var isValid = function(s) {
    
    // Declare a hashMap
    const hMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    //Create a new var that is an array
    const newArr = [];
    
    // Looking for valid Parentheses of string s
    for (const i of s) {
        // Checking with the .hasOwnProperty method which is boolean based to see if any of the indexes in s is in map
        if (hMap.hasOwnProperty(i)) {
            // newArr.push(newArr) pushes the i of s into the array
            newArr.push(i)
        //If condition is false I want to run this else statement
        } else {
            // I am using the .pop() method to remove the last element of the array and returns it
            const closeNewArr = newArr.pop();
            // if statement to compare what's inside the hMap and the array
            if (i !== hMap[closeNewArr]) {
                return false;
            }
        }
    }
    // Strict equity because I want to see if there is any open brackets
    return newArr.length === 0;
};

const s = "([)][]]{}" //This isn't the testcase for the problem. This was your input Mo

isValid(s);
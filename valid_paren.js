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
    for (const vParentheses of s) {
        // Checking with the .hasOwnProperty method which is boolean based to see if the property exists or not in array
        if (hMap.hasOwnProperty(newArr)) {
            // newArr.push(newArr) puts the porperties from hMap into the array
            newArr.push(newArr)
        //If condition is false I want to run this else statement
        } else {
            // I am using the .pop() method to remove the last element of the array and returns it
            const closeNewArr = newArr.pop();
            // if statement to compare what's inside the hMap and the array
            if (newArr !== hMap[closeNewArr]) {
                return false;
            }
        }
    }
    // Strict equity because I want to see if there is any open brackets
    return newArr.length === 0;
};

const s = "([)][]]{}" //This isn't the testcase for the problem. This was your input Mo

isValid(s);
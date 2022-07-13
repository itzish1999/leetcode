const { resourceLimits } = require("worker_threads");

var combinationSum = function(candidates, target) {
    //Created an Array called results. This is what I will use to present the desired results
    var result = [];

    //Creating a function named total. I am passing the params for array, sum and index
    //I put index so that the for loop doesn't mess up the code
    const total = function(arr = [], sum = 0, index = 0) {
        if (sum > target) return; //Using two if statements to compare / do the math
        if (sum === target) result.push(arr) //If the sum of the numbers added is the same as
         //target I am pushing it to my array that I will call later
    
        //For loop to go through the candidates array
        for ( let i = index; i < candidates.length; i++) {
            total([...arr, candidates[i]], sum+candidates[i], i); 
            //This is just what our result would look like. This is the structure. [...arr, candidates[i]] is to show the numbers giving total
            //Then adding the sum to candidates. Lastly, I am also calling forth i to present it once instead of it repeating in the console
        }
    }
    total()
    //Return result
    return result;
};

const candidates = [2,3,6,7];
const target = 7;

combinationSum(candidates, target);
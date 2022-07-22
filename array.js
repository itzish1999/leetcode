const arrayManip = function(nums) {
    let hMap = {};
    // let highestNumber = '';
    let highestCounted = 0

    for (let i = 0; i < nums.length; i++) {

        if(!hMap[nums[i]]) {
            hMap[nums[i]] = 1;
            console.log(!hMap[nums[i]])
        }
        else{
            hMap[nums[i]] = hMap[nums[i]] + 1
        }

console.log(nums[i])

        if(highestCounted < hMap[nums[i]]) {
            highestCounted = nums[i];
            // highestCounted = hMap[nums[i]];
        }
           
        }      
        
        console.log("Highest Number : " + highestCounted)
};


const nums = [3, 2, 3];
arrayManip(nums);
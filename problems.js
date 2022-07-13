var topKFrequent = function(nums, k) {
    
    const hMap = {};
    let arr = []; 
    
    for (let i = 0; i < nums.length; i++) {
       if (hMap[nums[i]]) {
           hMap[nums[i]] += 1
       } else {
           hMap[nums[i]] = 1
       }
    }
   
    for (let values in hMap) {
        if (values <= k) {
            arr.push(values)
        }
        console.log(arr)
    }
    console.log(hMap)
};


const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

topKFrequent(nums, k);
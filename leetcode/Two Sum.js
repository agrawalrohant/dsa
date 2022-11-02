// question --> https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = {};
    for(let i=0; i<nums.length;i++){
        if(map[nums[i]] !== undefined){
            return [map[nums[i]],i]
        }else{
            map[target - nums[i]] = i;
        }
    }
};
// question --> https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let zeroMoved = 0;
    for(let i=0;i < nums.length - zeroMoved;i++){
        if(nums[i] === 0){
            // remove
            nums.splice(i,1);
            nums.push(0);
            zeroMoved++;
            i--;
        }
    }
    return nums;
};
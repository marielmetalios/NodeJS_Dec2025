// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */

// const val = 3
// const nums = [1,2,3,5,6,7]
// var removeElement = function(nums, val) {
//     return nums.filter(item => item !== val);
// };

// console.log(nums);


// const nums = [3, 2, 2, 3];
// console.log(nums);
// const val = 3;
// const k = removeElement(nums, val);


const nums = [3, 2, 2, 3];
const val = 3;
var removeElement = function(nums, val) {
    let k=0;
    for (let i=0; i < nums.length; i++)
    if (nums[i] !==val) {
        //move it to the front of array?
    nums[k] = nums[i];
    k++;
    }
return k;
}
const k = removeElement(nums, val);
console.log(k);


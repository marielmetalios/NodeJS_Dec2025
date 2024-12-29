// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// // Given an integer x, return true if x is a palindrome and false otherwise.

// Take the number 12.
// Reverse it to get 21.
// Add the original number (12) to the reversed number (21) to get 33, which is a palindrome

/**
//  * @param {number} x
//  * @return {boolean}
//  */
// const isPalindrome = function(x) {
//     for ()
    
// };
const num = 12;
function reverseNumber(num) {
    // Convert number to string, reverse it, convert back to number
    return parseInt(num.toString().split('').reverse().join(''));
  }

const reversed = reverseNumber(num);
console.log(reversed);

let addNumbers = (num + reversed)
console.log(addNumbers);
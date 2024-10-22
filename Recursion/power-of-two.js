// https://leetcode.com/problems/power-of-two/solutions/5323797/power-of-two/

// Intuition

// For this problem, we are checking if a number is a power of two. Any number that is a power of two can essentially be divided down until it reaches 2. With a few base cases, we can build a recursive function to solve this problem.

// Approach

// Handle all base cases

// Since we're checking if n == 2x and n is an integer, n can not be anything less than one. If so, we return false.

// All powers of two are even numbers except for 1. If n === 1, that is 2^0 and we return true.

// Lastly we check if n/2 doesn't have a remainder of 0. Meaning, the current number is not an even number. If the remainder is not zero, we return false.

// Return the recursive relationship

// isPowerOfTwo(n) = isPowerOfTwo(n/2)

// We want to continue dividing n by two and check the output against the three conditions.

// Complexity

// Time complexity:
// O(log n) - the recursive function could be called n times before it reaches the base case but n is cut in half with every successful call.

// Space complexity:
// O(1) - Antime it's called, the only variable in use is the number n.

// Code
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    if (n <= 0) {
        return false
    }
    if (n === 1) {
        return true
    }
    if (n % 2 !== 0) {
        return false
    }
    return isPowerOfTwo(n / 2)
};
// https://leetcode.com/problems/fibonacci-number/solutions/5378728/solving-for-fibonacci-number-recursively-with-memoization/

// Intuition
// This problem asks to solve for the Fibonacci value of n. Using recursion with memoization, we can figure out and store all values less than n in an object and use them when needed for a more expedient runtime.

// Approach
// In fib()
// Create an memo/cache object to store: {n : fibonacci value}.

// Return the helper function that will do the majority of the work. The helper function should take two parameters. One for n and another for the memo object.

// In helper()
// The helper function contains the same conditions that would normally be used when solving for fib(n) recursively with a few additions.

// if(n < 2) return n:
// Since we've been told that fib(0) = 0 and fib(1) = 1, we can use this info to create a base case for the problem .

// if(memo[n]) return memo[n]:
// This condition checks if our memo object has the fib value cached. If it does, then it will return that fibonacci value.

// result = helper(n - 1, memo) + helper(n - 2, memo), memo[n] = result, & return reuslt
// Lastly, if none of the conditions check out. We want to continue our recursive journey so we can cache the new values. Once the value is determined, it is stored in the memo object. Lastly, we return our computed result.

// Complexity
// Time complexity:
// O(n) , the time complexity depends on the length of n. We essentially need to find all fibonacci values less than n at least once except for fib(0) & fib(1).

// Space complexity:

// O(n) , the largest variable is the recursive call for the result variable.

// Code

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
 const memo = {};
 return helper(n, memo)
}

const helper = (n, memo) => {
    if(n < 2){
        return n
    }
    if(memo[n]){
        return memo[n]
    }
    let result = helper(n - 1, memo) + helper(n - 2, memo)
    memo[n] = result
    return result
}
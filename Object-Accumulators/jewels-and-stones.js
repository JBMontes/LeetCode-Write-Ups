// https://leetcode.com/problems/jewels-and-stones/solutions/5149343/jewels-and-stones-explanation-and-solution

//Description
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

//Initial Approach

// var numJewelsInStones = function(jewels, stones) {
//     let total = 0;
//     let stoneObj = {};
//     for(let stone of stones){
//         !stoneObj[stone] ? stoneObj[stone] = 1 : stoneObj[stone]++
//     }

//     for(let jewel of jewels){
//         if(stoneObj.hasOwnProperty(jewel)){
//             total += stoneObj[jewel]
//         }
//     }
//     return total
// };

//Optimized Approach

// Intuition
// Count the number of times the individual characters in the jewels parameter match any character in the stones param.

// Approach
// Track the unique characters in the stones parameter using an object where the key is the unique character and the value is the # of occurrences.

// Add the values from the object's key:value pair whose key match with the unique characters in the jewels parameter

// Return the total sum of the values collected.

// Complexity
// Time complexity: O(n^2)
// Since the last for-loop uses an .includes(), which has a time complexity of O(n), the time complexity of the function is about O(n*n).

// Space complexity: O(n)
// The largest value in the function is the Object.entries(obj) which has a space complexity of O(n). Every other value or variable has a space complexity of O(1).

// Code
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let total = 0
    let obj = {}

    for (let char of stones) {
        !obj[char] ? obj[char] = 1 : obj[char]++
    }

    for (let [key, value] of Object.entries(obj)) {
        jewels.includes(key) ? total += value : total += 0
    }

    return total
};
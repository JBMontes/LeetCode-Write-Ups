// https://leetcode.com/problems/guess-number-higher-or-lower/solutions/5270872/guess-number-higher-or-lower-solution-write-up/

// Intuition
// For the guessing game, we're picking a number from 1 to n. Depending if we guessed too high or low, we can either guess with a higher or lower number. For this problem, utilizing a binary search could be helpful. If the guess < pick, we could move a pointer up. If guess > pick, we could move our other pointer down. Until we make the right guess, we will continue with the process.

// Approach
// Initilize the pointers to reflect our range of numbers we can guess from.

// Using a while loop, we use the condition first <= last because we want the interation to stop AFTER the pointers (first and last) cross paths. Sometimes we can miss out on the answer if first < last is used because if your pointers are touching the same value and that value happens to be the answer, the while loop will break.

// For binary searches, we need to access the middle point between the first and last. Adding the current first and last point and dividing it by two will get you that value. It's also important to use Math.floor to take care of decimal values. Using that value, we can check the result of our current guess by storing the results from guess(n) in a variable.

// As mentioned in the description: if the result is -1: num > pick, if result is 1: num < pick, and if the result is 0: num === pick. We can now set the conditions inside the while loop to shift the pointers or return the number picked depending on the results. If 1: we move the first pointer 1 index to the right of the middle point. If -1: we move the last pointer 1 index to the left of the middle point. If 0: we return our middle number.

// Complexity
// Time complexity:
// O(log n) : since we're reducing our seach space after every iteration, the time complexity is O(log n). Faster than looking at every single number O(n)!

// Space complexity:
// O(1) : All variables created and used in the function have a O(1) space complexity so it stays O(1).

// Code
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let first = 1;
    let last = n;

    while (first <= last) {
        const mid = Math.floor((first + last) / 2)
        const currentGuess = guess(mid);

        if (currentGuess === 0) {
            return mid
        } else if (currentGuess === 1) {
            first = mid + 1
        } else {
            last = mid - 1
        }
    }
};
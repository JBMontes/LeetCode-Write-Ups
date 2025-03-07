// Approach

// We initialize an empty hash map called `seenNum` to store numbers we’ve encountered along with their indices.

// As we iterate through `nums`, we calculate `diff = target - num`, which represents the number we need to find to complete the pair.

// We check if `num` is already in `seenNum`:
// - If it is, it means we have already seen its complementary pair, so we return their indices.
// - Otherwise, we store `diff` in `seenNum` with the current index as its value.

// Complexity

// Time complexity:
// O(n) - We traverse the array once, performing O(1) operations for each element.

// Space complexity:
// O(n) - In the worst case, we may store all elements in `seenNum` before finding a match.

// Code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seenNum = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;

        if (seenNum[num] !== undefined) {
            return [i, seenNum[num]];
        }
        seenNum[diff] = i;
    }
};
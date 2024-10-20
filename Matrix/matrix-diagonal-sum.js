// https://leetcode.com/problems/matrix-diagonal-sum/solutions/5243011/solving-matrix-diagonal-sum/

// Intuition

// Since the question is asking us to return the sum of the diagonals of the matrix, we can use a for-loop to tally up the numbers of the primary and secondary diagonals.

// For every cell on the primary diagonal, the row index === column index. So, you can obtain the primary numbers with matrix[i][i]. For secondary diagonals, row + col === matrix.length - 1. You can obtain the secondary with matrix[i][matrix.length - 1 - i].

// It's important to keep in mind the length of the matrix. If the length is odd, the middle number will be counted twice and will throw of your calculations.

// Approach

// To start, assign the matrixes length to a more managebale variable (n).

// We also want to create a accumulator variable (count) to handle the count once we start interating through the diagonals.

// Using a for loop, we can start iterating through the matrix. With mat[i][i], we collect all the primary diagonals in the matrix and add them to the count. We acquire the secondary be adding the numbers from mat[i][n - 1 - i] to the count.

// Lastly, we want to set a condition that checks whether the length of the matrix is odd or even but we are more focused on whether it is odd becasue that is when we will need to readjust our value for the count. Using modulo (%), we check if the length has a remainder of 1, meaning that the number is odd. We could access that number with mat[Math.floor(n / 2)][Math.floor(n / 2)]. Using Math.floor, we ensure that we don't get a decimal value. We could remove that value from the count once since it was counted twice during the iteration.

// Complexity

// Time complexity:
// O(n) - We used a single for loop and the time complexity depends on the length of n.

// Space complexity:
// O(n) - All variables created have an O(n) space complexity.

// Code

var diagonalSum = function(mat) {
    const n = mat.length; 
    let count = 0
    for (let i = 0; i < n; i++) {
         count += mat[i][i];
         count += mat[i][n-1-i]
}
    if (mat.length % 2 === 1) {
        count -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return count
};
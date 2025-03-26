//Intuition:
// You are given a 2D integer array score where score[i] represents the scores of the i-th student across multiple subjects. You are also given an integer k, which represents the index of the subject you should sort the students by.

// Sort the array in descending order based on the k-th subject score.


// Approach:

// Use the array sort method (.sort()) to compare two rows based on their k-th column value.

// Sort in descending order, so the student with the higher k-th subject score comes first.

// Use a comparison function inside .sort(), where:

// If a[k] < b[k], return 1 (swap positions).

// If a[k] > b[k], return -1 (keep order).

// Since .sort() runs in O(n log n) time complexity, it efficiently sorts the students based on the required column.

//Code

var sortTheStudents = function(score, k) {
 return score.sort((a,b)=>a[k] < b[k] ? 1 : -1)   
};
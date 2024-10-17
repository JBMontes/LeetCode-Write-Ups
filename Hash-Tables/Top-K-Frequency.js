https://leetcode.com/problems/top-k-frequent-words/solutions/5211889/top-k-frequency-words-solved/

// Intuition

// Since this problem is asking us to return the "k" most frequent strings, I think it is best to use .sort() to get to our answer becasue we could reference a hash object and sort through the the strings using the frequencies stored in the object.

// Based on the conditions provided in the description. We want to sort from highest -> lowest AND we should keep in mind, if the words have the same frequency, they should be sorted by lexicographical order.

// P.S. - When descriptions include words like "sort" & "array", .sort() might be a method that can get the job done.

// Approach

// Start by creating a hash object. Iterating through the string, we're checking if the object has the string value. If it doesn't, set it equal to 1. If it does, add 1. Once complete, the obj would have every unique string character as a key and their frequency as the value in the object.

// Sort the object by using Object.entries() which converts the object into an array [[key, value]]. While sorting, set the conditions to work in descending order only when a[1] !== b[1] but when a[1] === b[1], we want to sort using a - b condition which will sort by lexicographical order.

// Once the array has been sorted in descending order, we can simply slice from 0,K to get the answer.

// Complexity

// Time complexity:

// O(n log n) - Because we use .sort(), the minimum time complexity will be O(n log n). No internal loops were created so it doesn't get more complex.

// Space complexity:
// O(n) - All the variables created have a O(n) space complexity.

// Code
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {}
    for(let word of words){
        !obj[word] ? obj[word] = 1 : obj[word] += 1;
    }

 let freq = Object.entries(obj).sort((a,b)=> {
        if(a[1] < b[1] ){
            return 1
        }else if(a[1] > b[1] ){
            return -1
        }else{
         if(a[1] === b[1] ){
        return a < b ? -1 : 1
      }
        }
    })    

return freq.map((arr)=> arr[0]).slice(0,k)

};

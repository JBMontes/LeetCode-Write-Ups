/*
Write a function that reverses a string.
You must solve this **recursively**

Do not convert the string to an array and then reverse the array, etc.

Examples:
reverse("hello"); // "olleh"
reverse(""); // ""
*/

// Reverse a string recursively:

// Intuition: To solve recursively, we could think about continuously adding the last letter to a new string. Only thing to think about is how to remove the last letter in the string when calling the reverse() function again.

// Approach: 
// We start by creating an empty string to hold the new reverse string. 

// For the base case, we want to stop and return our new string once the new string is the same length as the original string. 

// By creating a string (rev) that holds the last letter of the original string, we can call back the reverse function that adds the new string while removing the last letter of the original string using the slice() method.

// Time Complexity: O(n) , the time complexity depends on the length of n. We also used .slice() which has a time complexity of O(n).

// Space Complexity: O(n) , again the largest variable is the recursive return which contains the slice().

Code:

const reverse = (str) => {
  let rev = ""

  if (rev.length === str.length) {
    return rev
  }

  rev += `${str[str.length - 1]}`
  return rev + reverse(str.slice(0, -1))
}

console.log(reverse("hello"));
console.log(reverse("jeremy"));
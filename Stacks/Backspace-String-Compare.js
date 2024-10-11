// https://leetcode.com/problems/backspace-string-compare/

// Intuition
// Since the problem involves iterating through a string and removing the character that comes before the "#" symbol, a stack array would be helpful to remove the previously added characters.

// Approach
// Create two empty stack arrays for each string.
// Since we are going to do the same work on two strings, create a function that checks for "#" and removes the previous character that was pushed into the stack. Else, push the character[i] into the stack. We then return the string using .join(""), which converts an array into a string.
// Lastly, we check if the strings match using a ternary and return true if they do and false otherwise.

// Complexity
// Time complexity:
// O(n) - Since we are iterating through the string once, the time complexity is based off the length of the string.

// Space complexity:
// O(n) - Methods such as .join() has an O(n) space complexity and for the return, .join("") was used.

// Code:

var backspaceCompare = function(s, t) {
    //We are removing the character before the "#" on both strings
    //and checking if they are equal after;
    //Create a helper function that handles the deletion using a stack;
    //return if helper(s) === helepr(t) ; if (true) = true : false

    const editor = (characters) => {
        let final = [];
        for(let char of characters){
            if(char === "#"){
                final.pop()
            }else{
                final.push(char)
            }
        }
        return final.join("")
    }

    return editor(s) === editor(t)
};
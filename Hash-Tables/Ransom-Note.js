// Problem Statement

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Approach

// Method: Using Hashmaps (Objects) for Frequency Count

// Build Character Frequency Maps:

// Create a hashmap magazineObj to count occurrences of each letter in magazine.

// Validate Against Ransom Note:

// Iterate through ransomNote, checking if each letter exists in magazineObj.

// If a letter is missing or used up, return false.

// Otherwise, decrement the count for that letter.

// Code Implementation

var canConstruct = function(ransomNote, magazine) {
    let magazineObj = {};

    for (let char of magazine) {
        magazineObj[char] = (magazineObj[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!magazineObj[char]) return false;
        magazineObj[char]--;  // Reduce count when used
    }
    
    return true;
};

// Complexity

// Time Complexity: O(n + m)

// n = Length of ransomNote

// m = Length of magazine

// We traverse magazine once to build magazineObj → O(m)

// We traverse ransomNote once to check characters → O(n)

// Overall: O(n + m)

// Space Complexity: O(1)

// The maximum number of different characters is 26 (since input consists of lowercase letters), so space usage is constant.
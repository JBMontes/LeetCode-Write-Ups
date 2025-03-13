// Approach:
// We use two pointers, a and b, to traverse both linked lists:

// Initialization:
// Start a at headA and b at headB.
// Traverse Both Lists:
// Move a and b forward one node at a time.
// If a reaches the end, redirect it to headB.
// If b reaches the end, redirect it to headA.
// Finding the Intersection:
// If the lists intersect, a and b will meet at the intersection node.
// If they do not intersect, both pointers eventually become null, and we return null.
// This approach ensures that both pointers traverse the same total length, guaranteeing that they meet at the intersection node (if one exists).

// Complexity
// Time Complexity: O(m + n)
// Each pointer traverses both lists once.
// Space Complexity: O(1)
// No extra space is used, only two pointers.

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA, b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    
    return a; 
};
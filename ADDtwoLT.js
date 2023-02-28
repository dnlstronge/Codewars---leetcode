const findsum = (l1, l2) => {
    let arg1 = l1.reverse().toString().replace(/,/g, "" )
            console.log(arg1)
    let arg2 = l2.reverse().toString().replace(/,/g, "" )
            console.log(arg2)
    let sum = +arg1 + +arg2
    let solve = sum.toString().split("").reverse()
        console.log(solve.map(n => Number(n)))
        return solve.map(n => Number(n))
    }

    findsum([2, 4, 3], [5, 6 ,4])

// test: [2, 4, 3], [5, 6 ,4] =======> [7, 0, 8]
// test: [5,4,2] + [3,4,1] =======>  [8,8,3] clear (pass)
// test:  [9,9,9,9,9,9,9], [9,9,9,9] ========> [8,9,9,9,0,0,0,1] clear (pass)


/* 2. Add Two Numbers
Medium
24.6K
4.8K
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.


/*

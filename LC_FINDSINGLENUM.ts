const countone = (arr: number[]) => {
  arr.map((num) => {
    let x = num
    let cut = arr.filter(y => x === y)
    if(cut.length === 1 ) {
      // console.log(x)
      return x
    }

  })
}

countone([7, 2, 2, 4, 4, 5, 5]) // outputs 7
countone([2, 2, 1, 4, 4, 5, 5]) // outputs 1
countone([3, 3, 4, 4, 7, 7, 9]) // outputs 9



/* (easy)

136. Single Number
Easy
13.6K
521
Companies
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.*/


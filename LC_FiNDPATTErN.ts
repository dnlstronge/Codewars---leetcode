


/*Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false. 

Constraints:

n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109*/


const findPattern = (nums: number[]) => { 
  let ans: boolean = false

  for(let i = 0; i < nums.length; i++) {
  let j = nums[i+1]
  let k = nums[i+2]

  if(i < k && k < j) {
    console.log(true)
    ans = true
    return ans
  } 
 

  }
 console.log(ans)
 return ans
}

/* test cases */
findPattern([3, 1, 4, 2]) // true
findPattern([-1, 3, 2, 0]) // true
findPattern([1, 2, 3, 4]) // false
findPattern([1, 2, 3, 4, 5, 7, 6, 1, 1, 1]) // true

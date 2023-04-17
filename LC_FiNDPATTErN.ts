
/*Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false. */

const findPattern = (nums: number[]) => {
  for(let i = 0; i < nums.length; i++) {
  let j = nums[i+1]
  let k = nums[i+2]
  let ans: boolean = false
  if(i < k && k < j) {
    console.log(true)
    return ans = true
    /* will return if pattern is valid*/ 
  } else if(ans = false) {
    /* continues to evaluate if valid pattern not found ~ !true */
    console.log(false)
    ans = false
  }
  }
}
findPattern([3, 1, 4, 2])

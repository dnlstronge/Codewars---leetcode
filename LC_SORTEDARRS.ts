const sumSorted = (nums1, nums2) => {
  let newArr = nums1.concat(nums2)
  let datapoint = newArr.length / 2
  if(newArr.length % 2 > 0) {
    datapoint = (newArr.length + 1) / 2
    console.log(newArr[datapoint -1])
    return newArr[datapoint -1]
  } 
  if(datapoint % 2 == 0) {

    // tricksy here------>
    let actual = (newArr[datapoint-1] + newArr[datapoint]) / 2
    console.log(actual)
  }

}

sumSorted([1, 2, ], [3 , 4])


// fixed it
// OOOPS it asked for median not mean lol

/*

4. Median of Two Sorted Arrays
Hard
22.6K
2.5K
Companies
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106*/

const low = (-(2**31));
const high = ((2**31)-1)

// first get 32 bit int (above)
// console.log(low, high) (clear)

const reverse = async (x) => {
  let arr = x.toString().split("")

  let rev = await arr.reverse().join().replace(/,/g, "")
  if(rev > )
  console.log(rev)


  
}
reverse(12345)






/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1*/

const low = (-(2**31));
const high = ((2**31)-1)

// first get 32 bit int (above)
// console.log(low, high) (clear)

const reverse = (x) => {
  const arr = x.toString().split("")

  /* negative integer */
    if(arr[0] == "-") {
     arr.shift()
     arr.push("-")
     let ans = Number(arr.reverse().join().replace(/,/g, ""))
      if( ans < low ) {
        console.log(0)
        return 0
      } else {
        console.log(ans)
        return ans
      }
  /* positive integer */   

    } else {
      let ans = Number(arr.reverse().join().replace(/,/g, ""))
      if(ans > high) {
        console.log(0)
        return 0
      } else {
        console.log(ans) 
        return(ans)
      }
    }
  
}
reverse(2432525)


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

// solution requires max neg amd pos numbers for signed range:

// --: -2,147,483,648
// ++: 2,147,483,647

// JS for this is: 

// console.log(-(2**31))
// console.log((2**31) -1)


let solution = 0
const bitplus = ((2**31) -1)
const bitneg = (-(2**31))

const reverseInt = (n) => {

if(n < 0) { 
      arr = n.toString()
      .split("")
      .reverse()
      .join().replace(/,/g, "").replace("-","")
      
      solution = Number(`-${arr}`)
      if(solution < bitneg ) {solution = 0 }
      //console.log(solution)
    }
if (n > 0 ) {
      arr = n.toString()
      .split("")
      .reverse()
      .join().replace(/,/g, "")
      solution = Number(arr)
      if(solution > bitplus) {solution = 0}
      //console.log(solution)
  }

        console.log(solution)
        return solution;
  }


reverseInt(10320435401)





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

-231 <= x <= 231 - 1

*/

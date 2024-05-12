/*

hackerrank problem

You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

Example

. We're working with 32 bits, so:



Return .

Function Description

Complete the flippingBits function in the editor below.

flippingBits has the following parameter(s):

int n: an integer
Returns

int: the unsigned decimal integer result
Input Format

The first line of the input contains , the number of queries.
Each of the next  lines contain an integer, , to process.

*/ 

const flipInt = (n) => {

 function toBinaryString(number) {
  return (number >>> 0).toString(2).padStart(32, '0');
}

function from32BitBinaryString(binaryString) {
  return parseInt(binaryString, 2) >>> 0;
}

const temp = toBinaryString(n)
const mapped = temp.split("").map((x) => {
  if(x == 0) {
    return 1
  } else {
    return 0
  }
})
const solution = from32BitBinaryString(mapped.join(""))

console.log(solution)
return solution
}

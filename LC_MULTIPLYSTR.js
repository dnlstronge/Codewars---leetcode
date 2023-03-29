/* difficulty (med) => my solution was to create arrays using two loops, the condtion for the loop to stop is comparing current iteration with string I
assume that this is within the constrains, a nested function finds the product of the two array lengths, which are the numeric equivalent of the strings */

const findproduct = (a, b) => {
  const arr1 = []
  const arr2 = []
  let solution = 0

  /* function to find product based on array length NOT actual numbers which are never coverted only ever compared */
  let val = (x = arr1.length, y = arr2.length) => {
    return (x * y)
  }

  // loop only compares does not convert
  // this is within constrait..

for(i = 1; i <= a; i++) {
  arr1.push(i)
}
for(j = 1; j <= b; j++) {
  arr2.push(j)
  
}

 solution = val()
 console.log(solution)
}


findproduct("25", "5")
// outputs 125









/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.*/

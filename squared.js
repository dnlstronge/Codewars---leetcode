/* 
 you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(n) {
  let str = n.toString();
  let answer = '';
for (let i in str) answer += str[i]*str[i]

  console.log(answer)
}

squareDigits(345654)

// I think this works

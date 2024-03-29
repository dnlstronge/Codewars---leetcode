// difficulty (medium??) 

// saints preserve us I almost solved it:) - seems to be a few edge cases I hadn't considered such as 3[a3[2]] brackets within brackets, a well. At least had fun with nested loops


const decode = (str) => {
  let solve = []
  const strung = str.split("]")
  const remove = strung.map(i => i.replace("[", "") )
      for (i = 0; i < remove.length; i++) {
        let arraynums = []
        let arrayletter = []
        let str = remove[i]
        for(j=0; j< str.length; j++) {
          if(Number(str[j] <=9)) {
            arraynums.push(str[j])
        } else {
          arrayletter.push(str[j])
        }
        } 
       let multiplier = arraynums.join().replace(/,/g, "")
     solve.push(arrayletter.map(letter => letter.repeat(multiplier)))
        
      }
  const solution = solve.join().toString().replace(/,/g, "")
        console.log(solution)
        return solution
        
}

decode("24[abc]3[b]5[z]") // outputs aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbzzzzz

/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

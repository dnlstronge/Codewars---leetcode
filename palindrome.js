// find whether and integer is a palindrome (easy)

var input1 = '121';


var array1 = Array.from(input1); 
var array2 = array1.reverse().join("")
var answer = (array2 === input1)


/// return true if input 1 is palindrome

console.log(answer)


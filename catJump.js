/*Description

An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

*/

function solution(s, f) {
const totalS = f - s + 1  // total shelves!

// logic dividing by 4 will always leave a remainder less than four and therefore = to 1 jump

const jumpmax = Math.floor(totalS / 4) 
const jumpremain = totalS * 4
return {jumpmax === jumpremain ? jumpmax : jumpmax + 1 
console.log(catJmax)}
  //Mew
}
solution(5, 23)

// think this should work but can it be refactored

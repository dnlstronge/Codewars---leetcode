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

function solution(s, f) 
{
  let steps = f-s

  let longjump = Math.floor(stepsToClimb/3)

  let jumps = steps % 3

  return longjump + jumps
}



// still didn't work. 
// tried alternate method

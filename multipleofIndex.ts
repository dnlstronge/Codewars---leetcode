/*

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
*/

function multipleOfIndex(array) {
 let solution = []
  for(let i = 0; i < array.length; i++)

  if(array[i] % i == 0 || array[i] == 0) {
    solution.push(array[i])
  }
  console.log(solution)
  return solution
}

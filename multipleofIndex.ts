/*

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
*/

function multipleOfIndex(array: string[]) {
  solution = []
  array.map((current) => {
    current % array.indexOf(current) > 0 && solution.push(current)
  })
  //console.log(solution)
  return solution
}

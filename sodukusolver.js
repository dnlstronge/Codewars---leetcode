function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
const b = null
const bd1 = [
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b], 
          [b, b, b, b, b, b, b, b, b],
            ]
            
 const bd2 = puzzle

 const bd3 =  [
          [1, 2, 3, 4, 5, 6, 7, 8, b], 
          [b, b, b, b, b, b, b, b, 2], 
          [b, b, b, b, b, b, b, b, 3], 
          [b, b, b, b, b, b, b, b, 4], 
          [b, b, b, b, b, b, b, b, 5], 
          [b, b, b, b, b, b, b, b, 6], 
          [b, b, b, b, b, b, b, b, 7], 
          [b, b, b, b, b, b, b, b, 8], 
          [b, b, b, b, b, b, b, b, 9],
            ]

if(solved(puzzle)) {
  return puzzle
} else {
  const possible = nextBoard(boards)
  const validBoard = keepValid(possible)
  return searchForSolution(validBoards)
}

function searchForSolution(boards) {
  if(boards.length < 1) {
    return false
  } else {
    // backtrack for solution
  }
}

/* Write a function whih finds the halfway point between to integers in sequence (n1, n2)

constraints n1 < n2, n2 < 100*/

// i wrote a function which finds median or midpoint.....

const findhalf = (num, num2) => {
  let arr = []
  let solution = 0
  for(let i = 1; i < num2+1; i++)
  {
    arr.push(i)
  }

  let median = arr.length % 2
  if (median > 0) {
    
    solution = (arr.length - 1) / 2 + 1
  }
  else {
  
    solution = (arr.length + 1) / 2
  }
  console.log(solution)
  return solution 

}


findhalf(1, 20)



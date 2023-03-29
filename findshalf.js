/* Write a function whih finds the halfway point between to integers in sequence (n1, n2)

constraints n1 < n2, n2 < 100*/

// i wrote a function which finds mean or midpoint.....


const findhalf = (num, num2) => {
  let arr = []
  for(let i = 1; i < num2+1; i++)
  {
    arr.push(i)
  }
  let solution = 0
  let median = arr.length % 2
  if (median > 0) {
    console.log((arr.length -1) / 2 + 1)
  }
  else {
    console.log((arr.length +1)/ 2)
  }

}


findhalf(1, 33)


function positiveSum(arr) {
  let total = 0
  for(let i = 0; i< arr.length; i++ ) 
  {
    if(i > 0 ) {
      total += i
    }
  }
  return total
}

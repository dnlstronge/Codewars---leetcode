// write a function to find the lonely int - all other items in the array of integers will have a a pair: 

function lonelyinteger(a) {
  let sorted = a.sort((a, b) => a - b)
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] !== sorted[i-1] && sorted[i] !== sorted[i+1]) {
      //console.log(sorted[i])
      return sorted[i]
    }
  }
}

lonelyinteger([1, 2, 1, 3, 2, 4, 4])

// create a function which applys the collatz conjecture and counts the number of times the algo is applied to the given number,

const applyColatz = (n) => {
  let num = n
  let passes = 0
  const applyCalc = (x) => {
    if(x === 1) {
      num = 1
    } else if (x % 2 === 0) {
      num = x/2
    } else {
      num = 3 * x + 1
     
    }
  passes += 1
  }
  do {
    if(num === 1) {
      passes = 0
    } else {
      applyCalc(num)
    }
    
  } while (num !== 1)
  console.log(passes)
  return passes
}

applyColatz(5)
  

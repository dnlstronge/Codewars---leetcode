/// find the number of consonants in a given sentene: 

function consonantCount(str) {
  let solution = 0
  for (let i=0; i < str.length; i++) {
    if(str[i] !== 'a' && str[i]!== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
      solution++
    
    }
  
  }
  return solution
console.log(solution)
}

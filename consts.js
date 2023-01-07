function consonantCount(str) {
  let solution = str.match(/(?![aeiou])[a-z]/gi, "").length


console.log(solution)
return solution
    }
  

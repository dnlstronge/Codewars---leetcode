
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

xport function bmi(weight: number, height: number) {
  const calc = weight / (height**2) 
  let solution = ""

  const rangeMap = {
    Underweight: 18.5,
    Normal: 25,
    Overweight: 30,
    Obese: 30,
  }

  //under
  if(calc <= rangeMap.Underweight) {
   return solution = Object.entries(rangeMap)[0][0]
   
  }
  // normal
  if(calc > rangeMap.Underweight && calc <= rangeMap.Normal) {
   return solution = Object.entries(rangeMap)[1][0]

  }
  // over 
  if(calc > rangeMap.Normal && calc <= rangeMap.Overweight) {
   return solution = Object.entries(rangeMap)[2][0]
  
  } 
    //obese 
  
  else {
    return solution = Object.entries(rangeMap)[3][0]
  }

  return solution
}

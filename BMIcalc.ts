
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number) {
  const calc = weight / (height**2) 
  console.log(calc)
  const rangeMap = {
    Underweight: 18.5,
    Normal: 25,
    Overweight: 30,
    Obese: 30,
  }
  if(calc <= rangeMap.Underweight) {
    console.log(Object.entries(rangeMap)[0][0])
  }
  return
}

bmi(22, 1.94)

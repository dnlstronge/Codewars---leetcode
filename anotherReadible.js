
//// I think (!) I have go it... need to test



function formatDuration (seconds) {
 
 const yS = 36536000
 const dS = 86400
 const hrS =  3600
 const minS = 60

// years

  let years = Math.floor(seconds / yS) 
  //console.log(years)

  let days = Math.floor( seconds % yS / dS)
  //console.log(days)

  let hours = Math.floor( seconds % yS % dS / hrS)
  //console.log(hours)
  
  let minutes = Math.floor( seconds % yS % dS % hrS / minS)
  //console.log(minutes)

  let secs = Math.floor ( seconds % yS % dS % hrS % minS)
  //console.log(secs)

let array1 = []
let array2 = []

  if (years === 1 ) { array1.push(`${years} year`)}
  if (years > 1 ) { array1.push(`${years} years`)}

  if (days === 1 ) { array1.push(`${days} day`)}
  if (days > 1 ) { array1.push(`${days} days`)}

  if ( hours === 1 ) { array1.push(`${hours} hour`)}
  if (hours > 1 ) { array1.push(`${hours} hours`)}

  if (minutes === 1 ) { array1.push(`${minutes} minute`)}
  if (minutes > 1 ) { array1.push(`${minutes} minutes`)}

  if (secs === 1 ) { array1.push(`${secs} second`)}
  if (secs > 1 ) { array1.push(`${secs} seconds`)}


let solution = ''
switch (array1.length) {
  case 0:
  console.log(array1[0])

  case 1: 
  solution = `${array[0]}`
  
  case 2:
  solution = `${array1[0]} and ${array1[1]}`
  break;
 
  case 3: 
   solution = `${array1[0]}, ${array1[1]} and ${array1[2]}`
   break;
 
  case 4: 
  solution = `${array1[0]},${array1[1]}, ${array1[2]} and ${array1[3]}`
  break;
  
  case 5: 
  solution = `${array1[0]}, ${array1[1]}, ${array1[2]}, ${array1[3]} and ${array1[4]}`
  break;

default: 
console.log('error')
}
console.log(solution)



}

formatDuration(3667)

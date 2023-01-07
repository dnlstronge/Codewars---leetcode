function formatDuration (seconds) {
 
 const yS = 31536000
 const dS = 86400
 const hrS =  3600
 const minS = 60

 let array1 = []
 let solution = ''
// years

  let years = Math.floor(seconds / yS) 
  //console.log(years)
    if (years === 1 ) { array1.push(`${years} year`)}
    if (years > 1 ) { array1.push(`${years} years`)}
  
// days
  let days = Math.floor( seconds % yS / dS)
  //console.log(days)
    if (days === 1 ) { array1.push(`${days} day`)}
    if (days > 1 ) { array1.push(`${days} days`)}
  
// hours
  let hours = Math.floor( seconds % yS % dS / hrS)
  //console.log(hours)
    if ( hours === 1 ) { array1.push(`${hours} hour`)}
    if (hours > 1 ) { array1.push(`${hours} hours`)}

  
// minutes  
  let minutes = Math.floor( seconds % yS % dS % hrS / minS)
  //console.log(minutes)
    if (minutes === 1 ) { array1.push(`${minutes} minute`)}
    if (minutes > 1 ) { array1.push(`${minutes} minutes`)}


// seconds
  let secs = Math.floor ( seconds % yS % dS % hrS % minS)
  //console.log(secs)
   if (secs === 1 ) { array1.push(`${secs} second`)}
   if (secs > 1 ) { array1.push(`${secs} seconds`)}
 

 
 
switch (array1.length) {

  case 1: 
  solution = `${array1[0]}`
  break;

  case 2:
  solution = `${array1[0]} and ${array1[1]}`
  break;
 
  case 3: 
   solution = `${array1[0]}, ${array1[1]} and ${array1[2]}`
  break;
 
  case 4: 
  solution = `${array1[0]}, ${array1[1]}, ${array1[2]} and ${array1[3]}`
  break;
  
  case 5: 
  solution = `${array1[0]}, ${array1[1]}, ${array1[2]}, ${array1[3]} and ${array1[4]}`
  break;

default: 
return 'now'
}

  console.log(solution)
  return solution
}


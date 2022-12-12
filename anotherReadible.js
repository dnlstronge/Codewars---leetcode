function formatDuration (seconds) {
 
 const yS = 36536000
 const dS = 86400
 const hrS =  3600
 const minS = 60

// years

  let years = Math.floor(seconds / yS) 
  console.log(years)

  let days = Math.floor( seconds % yS / dS)
  console.log(days)

  let hours = Math.floor( seconds % yS % dS / hrS)
  console.log(hours)
  
  let minutes = Math.floor( seconds % yS % dS % hrS / minS)
  console.log(minutes)

  let secs = Math.floor ( seconds % yS % dS % hrS % minS)
  console.log(secs)

let array1 = []
let array2 = []

if (years > 1 ) { array1.push(`${years} years`)}



}


// maybe user arrays? to determine if an array has a certain length it can be separated with the appropriate punctuation,
// have condition decide what gets pushed 'plural; or 'singular

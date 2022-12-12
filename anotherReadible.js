function formatDuration (seconds) {
 
 const yS = 36536000
 const dS = 86400
 const hrS =  3600
 const minS = 60

  let years = Math.floor(seconds / yS)
  console.log(years)
  

  let days = Math.floor( seconds % yS / dS)
  console.log(days)

  let hours = Math.floor( seconds % yS % dS / hrS)
  console.log(hours)

  let minutes = Math.floor( seconds % yS % dS % hrS / minS)
  console.log(minutes)

  let secs = Math.floor ( seconds % yS % dS % hrS % minS)
 
 //const solution = {logic}
  //const min = 60
// years

}

formatDuration(99184567)

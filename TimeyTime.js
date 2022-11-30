/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/


function humanReadable (seconds) {

  
  //find hours 
  
let floorhours = Math.floor(seconds/3600)
let hours = '00'
  if (floorhours > 0 && floorhours < 10 ) 
    { hours = `0${floorhours}`} 
  if (floorhours > 9 ) 
    {hours = floorhours}

// find minutes

let floormins = Math.floor(seconds % 3600 / 60)
let mins = '00'
  if (floormins > 0 && floormins < 10) 
    { mins = `0${floormins}`}
  if (floormins > 9 ) 
    { mins = floormins }

 // find seconds

console.log(mins)

}
humanReadable(6557)
  

/*
Thoughts: 
1-find number of hours, add ? if under 3600 (hours in sex) return 00
2. find number of minutes (logic to determine?) 
3- remainder of seconds?
4 - so works in 3 stages, still need to find seconds using remainder?
5- think remainder of seconds @ 60 provides remaining seconds

*/

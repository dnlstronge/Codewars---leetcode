/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/


function humanReadable (seconds) {

// find hours

let floorhours = Math.floor(seconds / 3600)
let hours = '00'
  if (floorhours > 0 && floorhours < 10 ) 
    { hours = `0${floorhours}`} 
  if (floorhours > 9 ) 
    {hours = floorhours}

// find mins

let floormins = Math.floor(seconds % 3600 / 60)
let mins = '00'
  if (floormins > 0 && floormins < 10) 
    { mins = `0${floormins}`}
  if (floormins > 9 ) 
    { mins = floormins }

// find secs

let floorsecs = Math.floor(seconds % 60 )
let secs = '00'
  if (floorsecs > 0 && floorsecs < 10)
    { secs = `0${floorsecs}`} 
  if (floorsecs > 9) 
    { secs = floorsecs }

console.log(hours, mins, secs)
return `${hours}:${mins}:${secs}`
}
console.log(humanReadable(4160))

/*
Thoughts: 
1-find number of hours, add ? if under 3600 (hours in sex) return 00
2. find number of minutes (logic to determine?) 
3- remainder of seconds?
4 - so works in 3 stages, still need to find seconds using remainder?
5- think remainder of seconds @ 60 provides remaining seconds

note: because using 60 to divide value will never be more than 59 for last two parts
challenge specified that number of hours will never be greater than 0-99 so that takes care of itself

Note: seting the hours/mins/secs variable to '00' allowes for the conditional to handle logic where an integer is returned
and no need to catch 00 values

SOLVED:)

*/

/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/

function humanReadable (seconds) {

let floorhours = Math.floor(seconds/3600)
let hours = '00'
if (floorhours > 1 && floorhours < 10 ) { hours = `0${floorhours}`} 
if (floorhours > 9 ) {hours = floorhours}
console.log(floormins)


let floormins = seconds % 3600 / 60
let mins = '00'


}

  

/*
Thoughts: 
1-find number of hours, add ? if under 3600 (hours in sex) return 00
2. find number of minutes (logic to determine?) 
3- remainder of seconds?

*/

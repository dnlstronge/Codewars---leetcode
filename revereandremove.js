/*write a function to reverse and remove no alphabetic chars: */

function omit(str) {
let solution = str.replace(/[^a-z]/g, '').split("").reverse().join("")

console.log(solution)
return solution
}

omit('99 is the 54! best ever')



// eg '99bugs99!' outputs 'sgub'

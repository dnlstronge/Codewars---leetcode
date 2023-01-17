/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

// an even number ends in 0 2 4 6 or 8 so with that in mind.....

function evenOrOdd(n) {
 const sol = n.toString().split('')
 console.log(sol)

sol[sol.length-1] === 0 ? console.log('even') : console.log('odd')
}

evenOrOdd(44)

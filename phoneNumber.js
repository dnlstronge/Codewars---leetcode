/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

// first  thoughts are to push or split the indices into variables and combine

function createPhoneNumber(number) {
 let tostring = number.toString().replace(/,/g, '')

 let callme = `(${tostring.slice(0,3)}) ${tostring.slice(3, 6)}-${tostring.slice(6, 10)}` 
 return callme
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// used concatenation of string to return required format
// I first convert the array of numbers to a string and then remove the commas using replace set to global
// i store this under a new var which I then use the slice method along with template literals to form the number format requested

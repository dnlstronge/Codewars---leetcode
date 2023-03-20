
/* This time given the arraay, log odd and even (simpler) */

const arr = [
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
]

// odd
console.log(arr.filter(num => num % 2  === 1))

// even
console.log(arr.filter(num => num % 2 === 0))



















/*  Create a function which creates an array with numbers 1 - 100, then return a new array with only odd numbers */


const arry = []

const arrayme = async () => {
for(let i = 0; i < 100; i++) {
  arry.push(i+1)
}

const newArry = await arry
const solve = newArry.filter(num => (num % 2) > 0)
console.log(solve)
return solve
};

arrayme()

// solved 

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

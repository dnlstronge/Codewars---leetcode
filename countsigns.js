// count the number of sign changes in an array + - or is a change. Empty array should return zero

const count = (arr) => {
  let sol = 0

for(let i = 0; i < arr.length; i++) {

if(arr[i] < 0) {
  if(arr[i+1] >= 0) {
    sol += 1
  }
}
if(arr[i] >= 0) {
  if(arr[i+1] < 0) {
    sol += 1
  }
}
}
console.log(sol)
return sol
}

count([1,-3,-4,0,5])

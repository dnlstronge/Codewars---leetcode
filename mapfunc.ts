// task is to create a function which finds even true, and create a map function which applies this 1st order function

const func = (a) => {

if(a % 2 !== 0) {
  return false
} else {
 return true
}
}
console.log(func(7))

const mapfunc = (arr) => {
  let errormessage = false
  newarr = []
  for(i = 0; i < arr.length; i++) {
    if(typeof i !== 'number') {
      errormessage = true
    } else {
      if(typeof i === "number") {
        newarr.push(func(i))
      }
       
    }
  }
 
if(newarr.length < arr.length) { 
  return "Array must contain numbers onlyy"
} else {
  return newarr
}
  
}

console.log(mapfunc([1, "string", 2, 6, 8, 5]))

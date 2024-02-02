// TaskCreate a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr){
  let boolvalue = true
  let boolArray = [ ]
  arr.map((item) => {
    
    if(item === "flick") {
      boolvalue = !boolvalue
     
    }
     boolArray.push(boolvalue)
  })
  console.log(boolArray)
  return boolArray
}

flickSwitch(["dog", "cat", "mouse", "flick", "dog", "cat", "mouse", "flick", "mouse"])

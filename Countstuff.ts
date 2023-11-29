// make a function which counts the number of instances of a particular letter in a phrase) 

const countStuff = (val: string, str: string) => {
  let counter = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] === val) {
      counter +=1
    }
  }
  console.log(counter)
  return counter
  
}

countStuff("a", "thenumberofasshouldbeaccuratelythree") //3

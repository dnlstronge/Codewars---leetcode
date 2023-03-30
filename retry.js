




const wordsort = (str, wordDict) => {
  const maxlength = str.length
   
    let counted = 0
for(i=0; i< wordDict.length; i++) {
  
  let counter = 0

  let regex = new RegExp(wordDict[i], "g")
  if(!str.includes(wordDict[i])) {
    return console.log("false")
  }
  if(str.includes(wordDict[i])) {
  counter = (str.match(regex).length)
  counted += counter * wordDict[i].length}
  console.log(counted)
  }  

  // checks if test fails
  if(counted !== maxlength) {
    console.log("false")
  } else {
    console.log("true")
  }

}


wordsort("dogsanddogspies", ["dogs", "and"])

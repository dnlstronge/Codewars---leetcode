
/* Solved I think, this was difficult, LC code (wordBreak), basically given a string and an array( the dictionary), you had 
to return true if the string could be divided by words in the dict to provide a sentence, e.g all words in dictionary used, so

dogssanddogs, ["dogs, "and"] should evaluate to true, while dogsanddogs, ["dogs", "sand"] *would evaluate to false.

boy did this wrack my brain as I don't think theres as simplistic way of doing this in JS,

i though about it for a while, and came up with an algorithm iterates through the dictionary finding matches using a regular expression, totalling the length og these
and comparing it to total string length, if there is no match it returns false, if there is a match it adds to a tally, if when the iteration completes 
the total is greater than the max length then it returns false, only if the words match and fit exactly in the string does it return true */



const wordsort = (str, wordDict) => {
  const maxlength = str.length
  let counted = 0
  
  /* Loop to interate through the dictionary*/
  
  for(i=0; i< wordDict.length; i++) {
  
  let counter = 0
  let regex = new RegExp(wordDict[i], "g")
  if(!str.includes(wordDict[i])) {
    console.log(false)
    return false
  }
  if(str.includes(wordDict[i])) {
  counter = (str.match(regex).length)
  counted += counter * wordDict[i].length}
  //console.log(counted)
  }  

  // checks if test fails
  if(counted !== maxlength) {
    console.log("false")
    return false;
  } else {
    console.log("true")
    return true;
  }

}


wordsort("dogsanddogspies", ["dogs", "and"])

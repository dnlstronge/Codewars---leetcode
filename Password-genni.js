//For fun: create a password generator which takes an input of a specified length 
//and returns a password of that length consisting of randomly generated numbers, letters and symbols - 

const setPassword = (length) => {
  let passwordArray = Array(length)

  const chars = [
    
 // nums (10)
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 

// lowercase (26)
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x' , 'y', 'z',

// uppercase (26)

'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X' , 'Y', 'Z',

// symbols (14)

'!', '>', '<', '@', '~', '£', '$', '&', '*', '?', '+', '-', '_', '%'
  
  ]
  
  password = passwordArray.fill().map(c => c = chars[Math.floor(Math.random() * 76)]).toString().replace(/,/g, '')
  
console.log(password)
return password

}

setPassword(10)


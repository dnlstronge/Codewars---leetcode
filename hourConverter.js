// HackerRank - overenineer a number converting function

function timeConversion(s) {
    let convertedTime = ""
    let mins = s.charAt(3).concat(s.charAt(4))
    let seconds = s.charAt(6).concat(s.charAt(7))
 

 // PM
    if(s.charAt(s.length -2) === "P") {
      if(s.charAt(0) == "1") {
    
  convertedTime = `${12}:${mins}:${seconds}`
   console.log(convertedTime)

    } else {
      
      let hourVal = Number(s.charAt(1)) + 12
      convertedTime = convertedTime = `${hourVal}:${mins}:${seconds}`
      console.log(convertedTime)
    }
     
     return
    
    }
    

// AM

    if(s.charAt(s.length-2 === "A")) {
      if(s.charAt(0) === "1") {
        convertedTime = `00:${mins}:${seconds}`
      } else {
        convertedTime = `0${s.charAt(1)}:${mins}:${seconds}`
      }

      console.log(convertedTime)
    }


}

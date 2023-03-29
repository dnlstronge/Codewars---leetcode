/*reverse a string without using the inbuilt reverse or slice methods */


const reversed = (str) => {
  arr = str.split("")
    //console.log(arr)
  const newArr = []
  arr.map(chr => newArr.unshift(chr))
   //console.log(newArr)

   const ammendArr = newArr.join().toString().replace(/,/g, "")
   console.log(ammendArr)
   return(ammendArr)
}

reversed("reverseme")

// expected output = emsrever

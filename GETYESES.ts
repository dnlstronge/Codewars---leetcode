// /1 - get the answers from the objects
// /2 - count the yeses



const data = [
  {
  name: "dave", 
  answer: "unsure"
}, 
{
  name: "dave", 
  answer: "yes"
}, 
{
  name: "dave", 
  answer: "no"
}, 
{
  name: "dave", 
  answer: "yes"
}, 
{
  name: "dave", 
  answer: "yes"
}, 

]
const datamapped = data.map((item) => {
  return item.answer
})


//console.log(datamapped)
const myfunc = (arr: string[] ) => {
  const sol = arr.filter((i) => i == "yes")
  console.log(sol.length)
}

myfunc(datamapped)

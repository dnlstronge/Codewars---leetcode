
const reverser = (n) => {

let answer = ""
let sol = n.toString().split("")
if(sol[0] !== "-") {

  
  answer = sol.reverse().toString().replace(/,/g, "")
} else {
  let minus = "-"
   answer = minus.concat(sol.reverse().toString().replace(/,/g, "").replace(/-/g, ""))

}
console.log(Number(answer))
return Number(answer)
}
reverser(123)
reverser(-123)

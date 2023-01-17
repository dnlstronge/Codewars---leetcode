
// but could this be solved with an array?...............





/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

// an even number ends in 0 2 4 6 or 8 so with that in mind.....

function evenOrOdd(n) {
  let sol = n.toString().split('')

switch(parseInt(sol[sol.length-1])) {
  case 0:
    return "Even"
    break;
    case 2:
    return "Even"
    break;
   case 4:
    return "Even"
    break;
     case 6:
    return "Even"
    break;
     case 8:
    return "Even"
    break;
  default:
    return "Odd"
}


}

/*

Read this earlier today but olution occurend to me while on a walk. given a list of ascending numbers sort these to the following format: 

[1]-[2]-[3]-[4]

output: [1]-[4]-[2]-[3],

[1]-[2]-[3]-[4]-[5]

output: [1]-[5]-[2]-[4]-[3]

etc etc, so 1st - last - 2nd - 2ndlast - 3rd - 3rdlast and so on and so on, 

cannae remember the constraints exactly

*/

const sorted = (list) => {
  let start = list
  let sorted = []
  for(i = 0; i=start.length; i++) {
    sorted.push(start.shift(i))
    sorted.push(start[start.length -1])
    start.pop()
  }

//   console.log(start)
//   console.log(sorted)
//   console.log(sorted.sort((a, b) => a-b))
  return sorted
}


// cant think of a better way but I am sure there is one, anyway it works

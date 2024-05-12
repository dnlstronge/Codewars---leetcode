// write a counting sort function for a range of vals <= 100 and > 0, input is an array 

const countSort = (a) => {
  let count = new Array(100).fill(0)
  for(let i = 0; i< a.length; i++) {
    const val = a[i]
    count[val]++
  }
  console.log(count)
  return count
}

countSort([1, 2, 7, 5, 4, 2, 5])

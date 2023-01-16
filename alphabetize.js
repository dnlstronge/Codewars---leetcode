/* I have four positive integers, A, B, C and D, where A < B < C < D. 
The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order.
Your task is to return the value of D.  */

/* I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.  */




function alphabet(ns) {

  let sorted = ns.sort((a, b) => a - b);
  let A = sorted[0]
  let B = sorted[1]
  let AB = A*B
  let C = AB == sorted[2] ? sorted[3] :sorted[2]
  console.log(sorted, A, AB, C)

}

alphabet([2,3,4,1,12,6,2,4])

// 

/* alternate (harder)

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.  */




















/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    for ( let i = 1; i < n ; i++)
    if (i % 3 == 0 && i % 5 == 0)
    console.log("fizzBuzz");
    else if(i % 3 == 0)
    console.log("fizz");
    else if(i % 5 == 0) 
    console.log("Buzz");
    else 
    console.log(i);
  
};
fizzBuzz()

//okay alternative????

var fizzBuzz = function(n) {
for (let i = 1; i < n+1;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'Buzz') || i)

};
//fizzBuzz()

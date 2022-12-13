// okay misread instruction needed sum of all array elements minus 

// this works but only for lower numbers in other words it needs to be optimised better.....

a x b = n - (a + b)

const removeNb = (n) => {

let arr1=[];

let arr2=[];
let multied = []
for (var i = 1; i <= n; i++) {
   arr1.push(i)
   arr2.push(i)
}

let total = 0
arr1.map(t => total += t)

let solveme = []
multied.push(arr1.flatMap(x => arr2.map(y => { 
  if ( x * y ===  total - (x + y))
  
 { solveme.push([x, y]) }
 
 })))

console.log(solveme)
return solveme



   }


/* A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 
Note
See examples of returns for each language in "RUN SAMPLE TESTS"
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 
Note
See examples of returns for each language in "RUN SAMPLE TESTS"*/

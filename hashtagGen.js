/* DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

*/

function generateHashTag(str){
    let answer = str.split(' ').map(l => l.charAt(0).toUpperCase() + l.slice(1))
return `#${answer.toString().replace(/,/g, '')}`
}

  //let answer = array.toString().replace(/,/g, '')

// sofar I can return the string, but need to capitalise each char at 0?
// think maybe return a mapped array, change char at instead of for loop.
// now I hav capitlised the letters I need to join? then conc '#'
// okay - now I think thats the logic sorted, need conditionals? 
// must return false in two cases

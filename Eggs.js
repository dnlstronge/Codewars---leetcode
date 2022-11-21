/* 

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

*/

unscrambleEggs()


//first thoughts are replace 'egg' with nothing

function unscrambleEggs(e) {
let eggs = e
return eggs.replace('egg', '')
}
console.log(unscrambleEggs('beggeginner'))

// returns beginner, butwhat if there are multiple 'egg'

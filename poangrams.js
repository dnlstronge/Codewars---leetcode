//function to find pangrams given a string - a pangram contains every letter of the alphabet: 


function pangrams(s) {
    // Write your code here
    const mapArr = []
    let trimmed = s.replace(/\s+/g, '').trim().toLowerCase()
    for(let i = 0; i< trimmed.length; i++) {
        
        !mapArr.includes(trimmed.charAt(i)) && mapArr.push(trimmed.charAt(i))
    }
    
    return mapArr.length == 26 ? "pangram" : "not pangram"
    
}

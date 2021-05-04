const words = ["aba","a","abcde","abc"];

function getWordOfMaximumLength(words) {
   let maxLen = words[0].length;
   let maxString = words[0];
   words.forEach(word => {
       if(maxLen< word.length) {
           maxLen =word.length;
           maxString =word;
       }   
   })
   return maxString;
}

console.log(getWordOfMaximumLength(words));
const word = "global";

function removeA(word) {
    let newWord = "";
    for(index=0; index<word.length; index++) {
        if(word.charAt(index) != 'a') {
            newWord = newWord + word.charAt(index);
        }
    }
    return newWord;
}

console.log(removeA(word));
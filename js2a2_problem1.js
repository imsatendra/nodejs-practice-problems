let word = "abcbd";

function countA(word) {
    countCharacterAandB = 0;
    for(let index=0; index<word.length; index++) {
        if(word.charAt(index) == 'a' || word.charAt(index) == 'b') {
            countCharacterAandB++;
        }
    }
    return countCharacterAandB;
}

console.log(countA(word));
let word = "abacd";

function countA(word) {
    countCharacterA = 0;
    for(let index=0; index<word.length; index++) {
        if(word.charAt(index) == 'a') {
            countCharacterA++;
        }
    }
    return countCharacterA;
}

console.log(countA(word));
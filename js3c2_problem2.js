const words = ["aba","ab","d"];

function countTotalCharacterInArray(words) {
    let countCharacter = 0;
    words.forEach(word => {
        countCharacter = countCharacter + word.length;
    })
    return countCharacter;
}

console.log(countTotalCharacterInArray(words));
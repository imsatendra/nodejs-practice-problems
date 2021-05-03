const words = ["a","0","23"];

function wordDouble(words) {
    
    return words.map(word => (word+word));
}

console.log(wordDouble(words));
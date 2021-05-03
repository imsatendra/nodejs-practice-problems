const numbers = [4, 5, 8, 9, 12];

function nextEvenNumber(numbers) {
    return numbers.map(number => {
        if (number % 2 != 0) {
            return number + 1;
        }
        else {
            return number;
        }
    })
}

console.log(nextEvenNumber(numbers));
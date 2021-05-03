const numbers = [10,9,12,14,23];

function getAllEvenNumbersInArray(numbers) {
    const EvenNumbers = [];
    numbers.forEach(number => {
        if(number%2 == 0) {
            EvenNumbers.push(number);
        }
    })
    return EvenNumbers;
}

console.log(getAllEvenNumbersInArray(numbers));
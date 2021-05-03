const numbers = [10,2,12,15];

function getSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
    numbers.forEach(number => {
        if(number <= smallestNumber) {
            smallestNumber = number;
        }
    })
    return smallestNumber;
}

console.log(getSmallestNumber(numbers));
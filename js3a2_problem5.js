const numbers = [1, 2, 12, -5];

function getLargestNumber(numbers) {
    let maxNumber = numbers[0];
    numbers.forEach(number => {
        if (maxNumber <= number) {
            maxNumber = number;
        }
    })
    return maxNumber;
}
console.log(getLargestNumber(numbers));
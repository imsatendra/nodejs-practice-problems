const numbers = [1, 2, 3, 4];

function sumOfNumber(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum = sum + number;
    })
    return sum;
}

console.log(sumOfNumber(numbers));
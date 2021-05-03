const numbers = [10, 20, 43, 2, 15, 6, 7];

function getDifferenceOfMaxAndMin(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    numbers.forEach(number => {
        if (number >= max) {
            max = number;
        }
        if (number <= min) {
            min = number;
        }
    })
    return max - min;
}

console.log(getDifferenceOfMaxAndMin(numbers));
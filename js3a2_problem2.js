const numbers = [3, 12, 5, 22, 9];

function countNumberGreaterThan10(numbers) {
    let count = 0;
    numbers.forEach(number => {
        if (number > 10) {
            count = count + 1;
        }
    })
    return count;
}

console.log(countNumberGreaterThan10(numbers));
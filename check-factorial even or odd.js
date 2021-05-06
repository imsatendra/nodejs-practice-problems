const number = 4;
function getFactorial(number) {
    let factorial = 1;
    for (let index = number; index > 1; index--) {
        factorial = factorial * index;
    }
    return factorial;
}

function checkFactorialEvenOrOdd(number) {
    const factorial = getFactorial(number);
    return (factorial % 2 == 0) ? `${factorial} is even number` : `${factorial} is odd number`;
}

console.log(checkFactorialEvenOrOdd(number));
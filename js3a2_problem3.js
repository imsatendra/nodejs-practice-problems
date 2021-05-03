const numbers = [5,2,3,12,1];

function sumEvenNumber(numbers) {
    let sumEven = 0;
    numbers.forEach(number => {
        if(number %2 == 0) {
            sumEven = sumEven + number;
        }
    })
    return sumEven;
}

console.log(sumEvenNumber(numbers));
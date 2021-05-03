const numbers = [12,1,5,8,4,7];

function sumEvenAndOdd(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    numbers.forEach(number => {
        if(number%2 == 0 ) {
            sumEven = sumEven + number;
        } else {
            sumOdd =sumOdd + number;
        }
    })
    console.log("sum of even number : " + sumEven);
    console.log("sum odd number : " + sumOdd);
}

sumEvenAndOdd(numbers);
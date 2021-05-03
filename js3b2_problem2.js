const numbers = [1,2,12,5];

function incrementBy1EachNumberInArray(numbers) {
    let modifiedArray = numbers.map(number =>  number+1)

    return modifiedArray;
}

console.log(incrementBy1EachNumberInArray(numbers));
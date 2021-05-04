const string = "41325";

function findNumberInString(string) {
    let countNumber = 0;
    for(let index =0 ; index <string.length; index++) {
        if(string.charAt(index) >= '1' && string.charAt(index) <= '3') {
            console.log(string.charAt(index) ,": found")
        }
    }
}

findNumberInString(string);
//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3
// lowercaseCount("abcABC123"); ===> 3
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
// lowercaseCount(""); ===> 0;
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

const lowercaseCount = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseCount = 0;
    for(let eachCharacter of str){
        if(alphabet.includes(eachCharacter)){
            lowerCaseCount += 1;
        }
    }
    return lowerCaseCount;
}

console.log(lowercaseCount('abc'));
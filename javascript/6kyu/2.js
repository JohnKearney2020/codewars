// https://www.codewars.com/kata/541c8630095125aba6000c00

// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digital_root = (num) => {
    let splitNum = num.toString().split(''); //Convert number into an array of strings. Each element is one digit of the number
    let sum = 0;
    splitNum.forEach(function(eachNumber){
        sum += Number(eachNumber); // need to convert each string back to a number
    })
    return sum.toString().split('').length > 1 ? digital_root(sum) : sum;
}
digital_root(493193);
// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    // good luck
    let isDivisible = true;
    if(number % a !== 0 || number % b !== 0){
        isDivisible = false;
    }
    // console.log(isDivisible);
    return isDivisible;
}
// isDivideBy(-12, 2, -6)
// isDivideBy(-12, 2, -5)
// isDivideBy(45, 1, 6)
// isDivideBy(45, 5, 15)
// isDivideBy(4, 1, 4)
// isDivideBy(15, -5, 3)

//OR
function isDivideBy(number, a, b) {
    return number%a !== 0 || number%b !== 0 ? false : true;
}
isDivideBy(-12, 2, -6)
isDivideBy(-12, 2, -5)
isDivideBy(45, 1, 6)
isDivideBy(45, 5, 15)
isDivideBy(4, 1, 4)
isDivideBy(15, -5, 3)

//OR - even better function solution
const isDivideBy = (number, a, b) => (number%a === 0 && number%b === 0);
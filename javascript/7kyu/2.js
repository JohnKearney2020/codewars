// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

// 16+18=214

// For this Kata you will have to forget how to add two numbers together.
// The best explanation on what to do for this kata is this meme:
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
// You may assume both integers are positive integers

// Example: 16, 18 = 214

const add = (num1, num2) => {
    let num1Digits = num1.toString().split(''); //convert to a string and split into an array of each digit --> "123" becomes ["1","2","3"]
    let num2Digits = num2.toString().split(''); //convert to a string and split into an array of each digit --> "123" becomes ["1","2","3"]

    let timesToUnShift = num1Digits.length - num2Digits.length;
    if(timesToUnShift > 0){ //if num1Digits is a larger array than num2Digits
        for(let i = 1; i <= timesToUnShift; i++){
            num2Digits.unshift("0"); // add leading zeros to num2Digits so it has the same number of total digits as num1Digits
        }
    } else { //if num2Digits is the larger array than num1Digits
        for(let i = 1; i <= Math.abs(timesToUnShift); i++){
            num1Digits.unshift("0"); // add leading zeros to num1Digits so it has the same number of total digits as num2Digits
        }
    }

    let finalValue = "";

    for(let i = 0; i < num1Digits.length; i++){
        let array1Value = 0;
        if(num1Digits[i]){
            array1Value = parseInt(num1Digits[i]); //convert the string value back to an integer
        }
        let array2Value = 0;
        if(num2Digits[i]){
            array2Value = parseInt(num2Digits[i]); //convert the string value back to an integer
        }
        finalValue += (array1Value + array2Value).toString(); //convert back to a string
    }
    console.log(parseInt(finalValue));
    return parseInt(finalValue);
}

// add(16,18); //214
add(122, 81); //1103
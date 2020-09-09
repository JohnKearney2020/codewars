// https://www.codewars.com/kata/5721a78c283129e416000999

// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.


const pickIt = (arr) => {
    const odd=[], even=[];
    for(let eachValue of arr){
        eachValue % 2 === 0 ? even.push(eachValue) : odd.push(eachValue);
    }
    return [odd,even];
}

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    
    
    return [odd,even];
}
// ================================================================================================================
// Description:
// * No Loops Allowed *
// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
// Do not use loops. Do not modify input array.
// ================================================================================================================

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit;
// }
// a = [1, 3, 2, 8, 9, 4, 5, 5, 6]    
// limit = 10;
// console.log(smallEnough(a, limit));


// ================================================================================================================
// * No Loops Allowed *
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
// Looking for more, loop-restrained fun? Check out the other kata in the series:
// ================================================================================================================
function check(a,x){
    if (a.indexOf(x) == -1) {
        return false;
    } else {
        return true;
    }
};
a = [1, 3, 2, 8, 9, 4, 5, 5, 6];
x = 'b';
console.log(check(a, x));
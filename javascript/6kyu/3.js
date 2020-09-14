// https://www.codewars.com/kata/59f08f89a5e129c543000069

// String array duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

const dup = (s) => {
    const noDupsAggregate = [];
    for(let eachString of s){
        let noDups = [eachString[0]]; //put the first letter of the new string into noDups
        for(let eachChar of eachString){
            if(eachChar !== noDups[noDups.length - 1]){
                noDups += eachChar;
            }
        }
        noDupsAggregate.push(noDups);
    }
    // console.log(noDupsAggregate);
    return noDupsAggregate;
}
// dup(["abracadabra","allottee","assessee"]);
dup(["kelless","keenness"]);
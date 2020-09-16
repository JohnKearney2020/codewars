// https://www.codewars.com/kata/59128363e5bc24091a00006f/train/javascript

// Simple Fun #265: The Janitor And His Mop

// Task
// In one city it is allowed to write words on the buildings walls. The local janitor, however, doesn't approve of it at all. Every night he vandalizes the writings by erasing all occurrences of some letter. Since the janitor is quite lazy, he wants to do this with just one swipe of his mop.
// Given a word, find the minimum width of the mop required to erase each of the letters.
// Input/Output
// [input] string word

// A word consisting of only lowercase English letters.
// 5 ≤ word.length ≤ 50
// [output] an integer array

// An array of length 26. The first element is the minimum width of the mop to erase letter 'a', the second - letter 'b' etc.

// Example
// For word = "abacaba", the output should be:

// [7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// (26 elements altogether)
// First element 7 means: from first "a" to last "a" need a width of 7.
// First element 5 means: from first "b" to last "b" need a width of 5.
// First element 1 means: from first "c" to last "c" need a width of 1.

const theJanitor = (word) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let output = [];
    //loop thru all the letters of the alphabet
    for(let eachLetter of alphabet){
        let mopWidth = 0; //reset our mop width with each new letter of the alphabet
        let index = word.indexOf(eachLetter);
        if(index === -1) {
            output.push(mopWidth); // 0
            continue; // move on to the next letter of the alphabet
        }
        mopWidth = 1; // at this point, we know at least one occurence of the letter exists in word, so our width is at least 1
        //if no further instances of the letter are found in the for loop below, the mop width will be 1, so we set it to one here

        let widthCounter = 2; //If we find another occurence of the same letter in word, the width counter will be at least 2, 1 for the original letter, and 1 for the 2nd occurence of the letter, so we set it equal to 2. We increment this value in our for loop.

        // loop through all the letters of the word starting at the next index after the first occurence of that letter in word
        for(let i = index + 1; i < word.length; i++){
            if(word[i] === eachLetter){
                mopWidth = widthCounter;
            }
            widthCounter++;
        }
        output.push(mopWidth);
    }
    console.log(output);
    console.log(`output length is ${output.length}`)
    return output;
}
theJanitor("abacaba");
// theJanitor("likemm");
// theJanitor("rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq")


// OR
const theJanitor = (word) => {
    const output = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let eachLetter of alphabet){
        let mopWidth = 0;
        let firstIndex = word.indexOf(eachLetter);
        if(firstIndex === -1) { 
            output.push(mopWidth); //0
            continue;
        }
        mopWidth = 1; //at this point we know there is at least one occurence of the letter in the word
        let lastIndex = word.lastIndexOf(eachLetter);
        if(lastIndex !== -1){
            mopWidth = lastIndex - firstIndex + 1; //+1 to account for the total indices between the two letters
            output.push(mopWidth);
            continue;
        }
        output.push(mopWidth); // 1
    }
    return output;
}

//OR best solution
const theJanitor = (word) => {
    return [...'abcdefghijklmnopqrstuvwxyz'].map(eachLetter => {
        let a = word.indexOf(eachLetter);
        let b = word.lastIndexOf(eachLetter);
        return a === -1 ? 0 : b - a + 1;
    })
}
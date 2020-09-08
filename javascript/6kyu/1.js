// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

const alphabetPosition = (string) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let stringOfPositions = "";
    let firstValidCharacter = true;
    for(let i = 0; i < string.length; i++){
        let currentCharacter = string[i];
        let position = alphabet.indexOf(currentCharacter.toLowerCase());
        if(position !== -1) { //if the character is part of the alphabet
            position += 1; //add 1 to the position to account for 0 indexing in alphabet
            if(string.length === 1){ // if we pass a valid 1 character string
                return stringOfPositions += position;
            } else if(firstValidCharacter === true){
                firstValidCharacter = false; 
                stringOfPositions += `${position}`; //we've found our first valid character and don't want a leading space
            } else { //if it's in our alphabet, we have multiple characters and we've already found our first valid one, and it's not the last character
                stringOfPositions += ` ${position}`; //give it a leading space
            }
        }
    }
    console.log(stringOfPositions)
    return stringOfPositions;
}

// alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition(";0xs/x{(");

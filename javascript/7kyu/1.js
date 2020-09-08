// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

const friend = (listOfNames) => {
    let arrayOfFriends = [];
    for(let eachName of listOfNames){
        if(eachName.length === 4){
            arrayOfFriends.push(eachName)
        }
    }
    return arrayOfFriends;
}

// OR

const friend = (listOfNames) => listOfNames.filter(eachName => eachName.length === 4);

// OR

const friend = (listOfNames) => {
    return listOfNames.filter((eachName,index) => { return eachName.length === 4 });
}
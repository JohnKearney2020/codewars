//https://www.codewars.com/kata/563e320cee5dddcf77000158

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//===============================================
//mean is the average we are used to

const getAverage = (arrayOfGrades) => {
    let totalGrades = 0;
    for(let eachGrade of arrayOfGrades){
        totalGrades += eachGrade;
    }
    return Math.floor(totalGrades/arrayOfGrades.length);
}

getAverage([2,2,2,2]);

// OR

const getAverage = (arrayOfGrades) => Math.floor(arrayOfGrades.reduce((a,b) => a + b) / arrayOfGrades.length);
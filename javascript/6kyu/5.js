// https://www.codewars.com/kata/5cbf57a636240b0025b09396/train/javascript
// Bouncing Beams (Pt. 1)

// Bouncing Beams (Pt. 1)
// You are assisting an applied physics experiment involving a high-powered laser shooting beams through a maze of mirrors to create paths of varying length. The first step to write the control software is to compute from an abstract model of the maze where the beam will exit and how long it will have traveled.

// In the abstract model, a maze is a rectangle of varying size consisting of unit sized boxes with either a mirror or nothing in them; a mirror can deflect the beam 90 degrees to either side, but cannot reflect the beam in the direction it came. The mazes will be represented by arrays of strings like this:

// "##############",
// "#        \   #",
// "*   \        #",
// "#            #",
// "#   \    /   #",
// "##############"
// * marks the origin of the beam; the beam will start from here, orthogonally to the boundary. Note that \ may require escaping, depending on the language (see example tests). In the example, the beam will move like this:

// "##############",
// "o--------\   #",
// "*---\    |   #",
// "#   |    |   #",
// "#   \----/   #",
// "##############"
// o marks the exit point of the beam. Given the maze in the example, the solution would be a pair of position and distance: ((0,1), 22). Each character counts as one unit distance, and only boxes inside the maze are counted.

// Summary
// mazes are rectangles of arbitrary size
// mirrors are represented by \ and /
// the first column, the first row, the last colum and the last row always contain the boundary, regardless of the actual characters
// the character * marks the entry point of the laser beam, which is pointed inside the maze
// you may assume that there is always a valid * marking the origin
// Have fun!

let board = [
    "##############",
    "#        \\   #",
    "*   \\        #", //15 the first \ is escaped
    "#            #", // 14
    "#   \\    /   #",
    "##############"
];

const exit_from_maze = (board) => {
    //===================
    //  find the origin
    //===================
    let origin = [];
    let direction = '';
    for(let i = 0; i < board.length; i++){
        let originPlaceholder = board[i].indexOf('*');
        if(originPlaceholder !== -1){
            origin.push(i,originPlaceholder);
            break; //we found the origin, exit out of the loop
        }
    }
    
    //find the starting direction to go
    origin[1] === 0 ? direction = 'east' : direction = 'west';
    console.log(origin, direction);
    
    // start the moves
    let boardHeight = board.length; // # of rows
    let boardWidth = board[0].length; // # of columns
    const move = (startPoint, direction, boardWidth, boardHeight) => {
        let rowStart = startPoint[0];
        let columnStart = startPoint[1];
        switch (direction) {
            case 'east':
                // move east along the same row. rowStart is the row and is static, i is the column and changes
                for(let i = rowStart; i < boardWidth; i++){
                    let currentChar = board[rowStart][i];
                    // console.log(currentChar);
                    if(currentChar === '\\'){ // need an escape in front of '\'
                        direction = 'south';
                        let distanceTraveled = distance(startPoint, [rowStart,i]);
                        console.log(distanceTraveled);
                    } else if(currentChar === '/') {
                        direction = 'north';
                    } else if(currentChar === '#'){
                        // console.log(`found exit!`);
                    }
                }
                break;

            case 'west':
                // move east along the same row. rowStart is the row and is static, i is the column and changes
                for(let i = rowStart; i < boardWidth; i--){
                    let currentChar = board[rowStart][i];
                    console.log(currentChar);
                    if(currentChar === '\\'){ // need an escape in front of '\'
                        direction = 'north';
                    } else if(currentChar === '/') {
                        direction = 'south';
                    } else if(currentChar === '#'){
                        console.log(`found exit!`);
                    }
                }
                break;
        
            default:
                break;
        }
    }
    const distance = (start, finish) => {
        console.log(start,finish);
        let xStart = start[0];
        let xFinish = finish[0];
        let yStart = start[1];
        let yFinish = finish[1];
        let distance = ( (xFinish - xStart)^2 + (yFinish - yStart)^2 )^(1/2);
        return distance;
    }
    move(origin, direction, boardWidth, boardHeight); //call the move function


    // const direction = (direction) => {
    //     switch (direction) {
    //         case "east":
                
    //             break;
    //         case "west":
                
    //             break;
    //         case "north":
                
    //             break;
    //         case "south":
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }



    return {
        position: [0, 0],
        distance: 0
    };
}
exit_from_maze(board);

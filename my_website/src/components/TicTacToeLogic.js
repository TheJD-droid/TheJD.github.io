import React from "react";


//const [boardState, setBoardState] = React.useState(createBoard())
/*
function createBoard() {
    var superBoard = {'top-L': {}, 'top-M': {}, 'top-R': {},
              'mid-L': {}, 'mid-M': {}, 'mid-R': {},
              'low-L': {}, 'low-M': {}, 'low-R': {}};
    var defaultBoard = {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
                'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
                'low-L': ' ', 'low-M': ' ', 'low-R': ' ',};

    for (const [keys, value] of Object.entries(superBoard) ) {
        superBoard[keys] = Object.create(defaultBoard)
        
    }

    return superBoard;
}
*/

export function checkWin(currentState, player) {
    console.log('checkwin called:')
    console.log(currentState)
    console.log(player)
    if (currentState.winner === 'None') {
        if ('blank' === player) {
            console.log(player)
            return player;
        }
        //Checking rows
        if (
            (currentState.topLeft === player) && 
            (currentState.topMiddle === player) && 
            (currentState.topRight === player) 
            ){
                currentState.winner = player;
                //console.log(currentState);
                return currentState.winner;
        }
        else if (
            (currentState.middleLeft === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.middleRight === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        else if (
            (currentState.bottomLeft === player) && 
            (currentState.bottomMiddle === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        //checking columns
        else if (
            (currentState.topLeft === player) && 
            (currentState.middleLeft === player) && 
            (currentState.bottomLeft === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        else if (
            (currentState.topMiddle === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomMiddle === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        else if (
            (currentState.topRight === player) && 
            (currentState.middleRight === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        //diagonal and antidiagonal
        else if (
            (currentState.topLeft === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        else if (
            (currentState.topRight === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomLeft === player) 
            ){
                currentState.winner = player;
                return currentState.winner;
        }
        //check if it's a cats game
        else if (
            (currentState.topLeft !== 'blank') && 
            (currentState.topMiddle !== 'blank') && 
            (currentState.topRight !== 'blank') &&
            (currentState.middleLeft !== 'blank') && 
            (currentState.middleMiddle !== 'blank') && 
            (currentState.middleRight !== 'blank') &&
            (currentState.bottomLeft !== 'blank') && 
            (currentState.bottomMiddle !== 'blank') && 
            (currentState.bottomRight !== 'blank')
            ){
                currentState.winner = 'cat';
                return currentState.winner;
        }



    }
    else {
        return currentState.winner;
    }
    //Means it is an invalid move, and the move should not complete
    return 'blank';

}  


const TicTacToeLogic = {
    
}


export default TicTacToeLogic;
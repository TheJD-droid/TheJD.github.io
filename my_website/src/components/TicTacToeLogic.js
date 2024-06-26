import React, { useState } from "react";
import TTTState from "./TTTState";

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

export function checkWin(currentState, player, isSuper) {
    console.log(isSuper)
    
    console.log('checkwin called:')
    console.log(currentState)
    console.log(player)
    if (currentState.winner !== 'None') {
        console.log('invalid move')
    }
    if (currentState.winner === 'None') {
        if ('blank' === player) {
            console.log(`blank player registered: ${player}`)
            return currentState.winner;
        }
        //Checking rows
        if (
            (currentState.topLeft === player) && 
            (currentState.topMiddle === player) && 
            (currentState.topRight === player) 
            ){
                currentState.winner = player;
                //console.log(currentState);
                if (isSuper) {
                    currentState.winningCombo.push('topLeft')
                    currentState.winningCombo.push('topMiddle')
                    currentState.winningCombo.push('topRight')
                    //console.log(currentState.winningCombo)
                }
                return currentState.winner;
        }
        else if (
            (currentState.middleLeft === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.middleRight === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('middleLeft')
                    currentState.winningCombo.push('middleMiddle')
                    currentState.winningCombo.push('middleRight')
                    //console.log(currentState.winningCombo)
                }
                return currentState.winner;
        }
        else if (
            (currentState.bottomLeft === player) && 
            (currentState.bottomMiddle === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('bottomLeft')
                    currentState.winningCombo.push('bottomMiddle')
                    currentState.winningCombo.push('bottomRight')
                    //console.log(currentState.winningCombo)
                }
                return currentState.winner;
        }
        //checking columns
        else if (
            (currentState.topLeft === player) && 
            (currentState.middleLeft === player) && 
            (currentState.bottomLeft === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('topLeft')
                    currentState.winningCombo.push('middleLeft')
                    currentState.winningCombo.push('bottomLeft')
                    //console.log(currentState.winningCombo)
                }
                return currentState.winner;
        }
        else if (
            (currentState.topMiddle === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomMiddle === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('topMiddle')
                    currentState.winningCombo.push('middleMiddle')
                    currentState.winningCombo.push('bottomMiddle')
                    //console.log(currentState.winningCombo)
                }
                return currentState.winner;
        }
        else if (
            (currentState.topRight === player) && 
            (currentState.middleRight === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('topRight')
                    currentState.winningCombo.push('middleRight')
                    currentState.winningCombo.push('bottomRight')
                    //console.log(currentState.winningCombo)

                }
                return currentState.winner;
        }
        //diagonal and antidiagonal
        else if (
            (currentState.topLeft === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomRight === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('topLeft')
                    currentState.winningCombo.push('middleMiddle')
                    currentState.winningCombo.push('bottomRight')
                    //console.log(currentState.winningCombo)

                }
                return currentState.winner;
        }
        else if (
            (currentState.topRight === player) && 
            (currentState.middleMiddle === player) && 
            (currentState.bottomLeft === player) 
            ){
                currentState.winner = player;
                if (isSuper) {
                    currentState.winningCombo.push('topRight')
                    currentState.winningCombo.push('middleMiddle')
                    currentState.winningCombo.push('bottomLeft')
                    //console.log(currentState.winningCombo)

                }
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
                if (isSuper) {
                    currentState.winningCombo.push('cat');
                    console.log(currentState.winningCombo)

                }
                return currentState.winner;
        }
    }

    return currentState.winner;



}  


const TicTacToeLogic = {
    
}


export default TicTacToeLogic;
import React from "react";


//const [boardState, setBoardState] = React.useState(createBoard())
function TicTacToeLogic() {
    {//console.log(createBoard())}
    
    }
    return(
        <></>
    );
}

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

export default TicTacToeLogic();
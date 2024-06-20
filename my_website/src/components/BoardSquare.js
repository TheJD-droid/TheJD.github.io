import React from "react";
import { Button, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CropDinIcon from '@mui/icons-material/CropDin';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Box from '@mui/material/Box';
//import checkWin from 



export default function BoardSquare(props) {
    
    const [flag, setFlag] = React.useState('blank');
    


    //console.log(props.currentState[props.boardPos])
    ///console.log(props)

    const handleClick = () => {
        console.log(props.currentState)
        console.log(props.superTTTState)
        //selected board doesn't have a winner, but maybe there already is an overall winner:
        if ('None' !== props.superTTTState['winner']) {
            console.log(`${props.superTTTState['winner']} has already won.`);
            return;
        }

        //space might be empty, but there could already be a winner for that board, which would make it an invalid move
        if ('None' !== props.currentState['winner']) {
            console.log('winner winner!')
            console.log(`${props.currentState['winner']} has already won on this board.`);
            return;
        }

        //clicking on a space that someone has already played in
        if (props.currentState[props.boardPos] !== 'blank') {
            console.log('Error! That space is not empty')
            return;
        }


        
        if (props.currentState[props.boardPos] === 'blank') {
            //the currently selected square is blank,
            //the selected board does not have a winner,
            //there is not yet an overall winner
            
            //check if we are playing on the right board:
            
            //we can go on any board
            if (props.superTTTState['prevMove'] === 'None') {
                
            }
            //we are restricted to a particular board, here we check if we are on that board:
            else if (props.boardID !== props.superTTTState['prevMove']) {
                //we aren't on that board, so we simply return
                console.log('error: selected board does not match previous move');
                console.log(props.boardID);
                console.log(props.superTTTState['prevMove']);
                return;

            }

            console.log(props.playerTurn);
            props.currentState[props.boardPos] = props.playerTurn
            if (props.playerTurn === 'X') {
                props.setPlayerTurn('O');
            }
            else if (props.playerTurn === 'O') {
                props.setPlayerTurn('X');
            }
            else {
                console.log('Error!');
                console.log(props.playerTurn);
            }
            setFlag(props.currentState[props.boardPos]);
        
        }
        

        console.log(props.currentState);
        const winner = props.checkWin(props.currentState, props.currentState[props.boardPos], false)
        console.log(props.superTTTState)
        if ('None' !== winner) {
            //winner found
            console.log('Winner found')
            props.superTTTState[props.boardID] = winner;
            console.log('superState: ')
            //props.superTTTState[props.boardID] = props.currentState
            console.log(props.superTTTState)
        }

        //important that we do this whether a winner is found or not, but for now, we can do it after we check
        
        console.log(props.superTTTState['prevMove'])
        console.log(props.superTTTState[props.boardPos])
        console.log(props.boardPos)

        //if the board corresponding to the chosen square has a winner, then we set the 'prevMove' to None:
        if (props.superTTTState[props.boardPos] !== 'blank') {
            props.superTTTState['prevMove'] = 'None';
        }
        //if the previous move does not have a winner, then we set the 'prevMove' to the position of the square that was chosen
        else if (props.superTTTState[props.boardPos] === 'blank') {
            props.superTTTState['prevMove'] = props.boardPos;
        }
        else {
            //impossible to reach. superTTT[prevMove] is either blank, or it isn't.
            console.log(`Error! superTTTState[${props.boardPos}] value is invalid: `);
        }

        if ('None' !== props.checkWin(props.superTTTState, props.currentState[props.boardPos], true)) {
            console.log(`${props.currentState[props.boardPos]} wins!`);
        }

    };

  return(
    <Box sx={{padding: '5px'}}>
        <IconButton onClick={handleClick}>
            {displayIcon(flag)}
        </IconButton>
    </Box>
  );

}

function displayIcon(flag) {
    if (flag === 'O') {
        //return <RadioButtonUncheckedIcon />
        return <RadioButtonUncheckedIcon sx={{color: 'red'}}/>
        
    }
    else if (flag === 'X') {
        //return <ClearIcon />
        return <ClearIcon sx={{color: "blue"}}/>
    }
    else {
        return <LensBlurIcon />;
    }

}



  
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
        if ('None' !== props.checkWin(props.currentState, props.currentState[props.boardPos])) {
            //console.log(props.checkWin(props.currentState, props.currentState[props.boardPos]))
            console.log('winner winner')
            return;
        }
        
        if (props.currentState[props.boardPos] === 'blank') {
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
        //let result = '';
        //result = props.checkWin(props.currentState, props.currentState[props.boardPos]);
        //console.log(`result: ${result}`)
        const winner = props.checkWin(props.currentState, props.currentState[props.boardPos])
        if ('None' !== winner) {
            //winner found
            console.log('Winner found')
            props.superTTTState[props.boardID] = winner;
            console.log('superState: ')
            //props.superTTTState[props.boardID] = props.currentState
            console.log(props.superTTTState)
            return;
        }
        /*
        if (flag === 'blank') {
            setFlag('X');
        }
        else if (flag === 'X') {
            setFlag('O');
        }
        else if (flag === 'O') {
            setFlag('blank');
        }
        else {
            setFlag('blank');
        }
        */
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



  
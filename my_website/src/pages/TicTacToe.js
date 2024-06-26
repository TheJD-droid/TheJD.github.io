import '../App.css';
import React from "react";
import { Button, ButtonGroup, Divider, IconButton, useTheme, Grid, colors } from '@mui/material';
import Box from '@mui/material/Box';
import TTTBoard from '../components/TTTBoard';
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


import './TicTacToe.css';
//import TicTacToeLogic from '../TicTacToeLogic';
import TTTState from '../components/TTTState';
import zIndex from '@mui/material/styles/zIndex';

const SELECTED_BORDER_COLOR = 'black';
const BORDER_SIZE = '5px';
const BORDER_STYLE = 'solid';
const BORDER_COLOR = colors.blueGrey[300];

//initial state
//{topLeft: 'blank', topMiddle: 'blank', topRight: 'blank', middleLeft: 'blank', middleMiddle: 'blank', middleRight: 'blank', bottomLeft: 'blank', bottomMiddle: 'blank', bottomRight: 'blank'}

function TicTacToe() {


    //superTTTBoard state

    const initialState = new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank');
    initialState.prevMove = 'None';
    initialState.winningCombo = [];
    //initialState.winningCombo.push('topLeft');
    
    //initialState.winningCombo = ('blank', 'blank', 'blank');
    const [superTTTState, setSuperTTTState] = React.useState(initialState);
    const [playerTurn, setPlayerTurn] = React.useState('X');
    //superTTTState.prevMove = 'None';
    //setSuperTTTState({...superTTTState, prevMove: 'None'});
    console.log('superTTTState?!');
    console.log(superTTTState);
    console.log(playerTurn);

    //Individual board state information
    //const [resetFlag, setResetFlag] = React.useState(false);
    
    const [boardState1, setBoardState1] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState2, setBoardState2] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState3, setBoardState3] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState4, setBoardState4] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState5, setBoardState5] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState6, setBoardState6] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState7, setBoardState7] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState8, setBoardState8] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    const [boardState9, setBoardState9] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));

    



    return (
        <Grid container direction='column' sx={{border: '4px solid red', padding: '0px', minWidth: '0px', width: '100%', height: '100%'}}>
          <Box sx={{border: '4px solid green', padding: '0px'}}>
            Tic tac Toe
          </Box>




            <Grid container minWidth='0px' direction='row' spacing={0}>
                <Grid item minWidth='0vw' width='25vw' height='1vh' sx={{border:'4px solid green', padding: '0px'}}>THIS</Grid>

                <Grid item minWidth='520px'>
                    {/*Tic tac toe board*/}
                    <Grid container direction='row'>

                        <Grid item>
                        <Grid container>
                        {superTTTState['topLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topLeft'] === 'blank') || (superTTTState.winningCombo.includes('topLeft')) ? styles.topLeftSelected : styles.topLeft
                            }>
                            <TTTBoard boardState={boardState1} setBoardState1={setBoardState1} boardID={'topLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        </Grid>
                        </Grid>
                        
                        <Grid item>
                        <Grid container>
                        {superTTTState['topMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topMiddle'] === 'blank') || (superTTTState.winningCombo.includes('topMiddle')) ? styles.topMiddleSelected : styles.topMiddle}>
                            <TTTBoard boardState={boardState2} setBoardState1={setBoardState2} boardID={'topMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        </Grid>
                        </Grid>

                        <Grid item>
                        <Grid container>
                        {superTTTState['topRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['topRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'topRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topRight'] === 'blank') || (superTTTState.winningCombo.includes('topRight')) ? styles.topRightSelected : styles.topRight}>
                            <TTTBoard boardState={boardState3} setBoardState1={setBoardState3} boardID={'topRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid container direction='row'>

                        <Grid item>
                        <Grid container>
                        {superTTTState['middleLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleLeft'] === 'blank') || (superTTTState.winningCombo.includes('middleLeft')) ? styles.middleLeftSelected : styles.middleLeft}>
                            <TTTBoard boardState={boardState4} setBoardState1={setBoardState4} boardID={'middleLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>

                        <Grid item>
                        <Grid container>
                        {superTTTState['middleMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleMiddle'] === 'blank') || (superTTTState.winningCombo.includes('middleMiddle')) ? styles.middleMiddleSelected : styles.middleMiddle}>
                            <TTTBoard boardState={boardState5} setBoardState1={setBoardState5} boardID={'middleMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>

                        <Grid item>
                        <Grid container>
                        {superTTTState['middleRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['middleRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleRight'] === 'blank') || (superTTTState.winningCombo.includes('middleRight')) ? styles.middleRightSelected : styles.middleRight}>
                            <TTTBoard boardState={boardState6} setBoardState1={setBoardState6} boardID={'middleRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction='row'>

                        <Grid item>
                        <Grid container>
                        {superTTTState['bottomLeft'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomLeft'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomLeft'] === 'blank') || (superTTTState.winningCombo.includes('bottomLeft')) ? styles.bottomLeftSelected : styles.bottomLeft}>
                            <TTTBoard boardState={boardState7} setBoardState1={setBoardState7} boardID={'bottomLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>

                        <Grid item>
                        <Grid container>
                        {superTTTState['bottomMiddle'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomMiddle'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomMiddle'] === 'blank') || (superTTTState.winningCombo.includes('bottomMiddle')) ? styles.bottomMiddleSelected : styles.bottomMiddle}>
                            <TTTBoard boardState={boardState8} setBoardState1={setBoardState8} boardID={'bottomMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>

                        <Grid item>
                        <Grid container>
                        {superTTTState['bottomRight'] === 'O' ? <RadioButtonUncheckedIcon sx={styles.overlayImage1} /> : <></>}
                        {superTTTState['bottomRight'] === 'X' ? <ClearIcon sx={styles.overlayImage2} /> : <></>}
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomRight'] === 'blank') || (superTTTState.winningCombo.includes('bottomRight')) ? styles.bottomRightSelected : styles.bottomRight}>
                            <TTTBoard boardState={boardState9} setBoardState1={setBoardState9} boardID={'bottomRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>

                        </Grid>
                        </Grid>
                    </Grid>



                </Grid>
                <Grid item>
                    <Grid item sx={{border: '4px solid green', padding: '0px', height: '80%'}}>
                        
                    </Grid>
                    <Grid item sx={{border: '0px solid green', padding: '0px'}}>
                        <Button sx={{padding: '0px'}} variant='contained' onClick={() => {
                            //console.log("Are you still there?")
                            restartGame(superTTTState, setSuperTTTState, initialState, playerTurn, setPlayerTurn, setBoardState1, setBoardState2, setBoardState3, setBoardState4, setBoardState5, setBoardState6, setBoardState7, setBoardState8, setBoardState9)
                        }}>Reset</Button>
                    </Grid>
                </Grid>
                
            </Grid>

            

        </Grid>
  );
}

function restartGame(superTTTState, setSuperTTTState, initialState, playerTurn, setPlayerTurn,
    setBoardState1, setBoardState2, setBoardState3, setBoardState4, setBoardState5, setBoardState6, setBoardState7, setBoardState8, setBoardState9

) {
    setSuperTTTState(initialState);
    console.log(superTTTState);
    setPlayerTurn('X');
    console.log(playerTurn);

    setBoardState1(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState2(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState3(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState4(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState5(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState6(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState7(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState8(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    setBoardState9(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));

    //setResetFlag(false);
    //console.log("HELLLLLLO!")
}


export const styles = {
    topLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    topMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    topRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    topRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    middleRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomLeft: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomLeftSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomMiddle: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomMiddleSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    bottomRight: {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    bottomRightSelected: {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },

    overlayImage1: {
        position: 'absolute',
        zIndex: '10',
        color: 'red',
        fontSize: 165
    },
    overlayImage2: {
        position: 'absolute',
        zIndex: '9',
        color: 'blue',
        fontSize: 165,
    }


}




export default TicTacToe;

import '../App.css';
import React from "react";
import { Button, ButtonGroup, Divider, IconButton, useTheme, Grid, colors } from '@mui/material';
import Box from '@mui/material/Box';
import TTTBoard from '../components/TTTBoard';

//import TicTacToeLogic from '../TicTacToeLogic';
import TTTState from '../components/TTTState';

const SELECTED_BORDER_COLOR = 'black';
const BORDER_SIZE = '5px';
const BORDER_STYLE = 'solid';
const BORDER_COLOR = colors.blueGrey[300];

//initial state
//{topLeft: 'blank', topMiddle: 'blank', topRight: 'blank', middleLeft: 'blank', middleMiddle: 'blank', middleRight: 'blank', bottomLeft: 'blank', bottomMiddle: 'blank', bottomRight: 'blank'}

function TicTacToe() {

    const initialState = new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank');
    initialState.prevMove = 'None';
    const [superTTTState, setSuperTTTState] = React.useState(initialState);
    const [playerTurn, setPlayerTurn] = React.useState('X');
    //superTTTState.prevMove = 'None';
    //setSuperTTTState({...superTTTState, prevMove: 'None'});
    console.log('superTTTState?!');
    console.log(superTTTState);
    console.log(playerTurn);

    return (
        <Grid container direction='column' sx={{padding: '10px'}}>
          <Box sx={{border: '4px solid green', padding: '20px'}}>
            Tic tac Toe
          </Box>


            <Grid container direction='row' spacing={0}>
                <Grid item minWidth='10vh' width='40vh' sx={{border:'4px solid green', padding: '10px'}}>THIS</Grid>

                <Grid item>
                    {/*Tic tac toe board*/}
                    <Grid container direction='row'>
                        <Grid item sx={(superTTTState.prevMove === 'topLeft') || (superTTTState.prevMove === 'None' && superTTTState['topLeft'] === 'blank') ? styles.topLeftSelected : styles.topLeft}>
                            <TTTBoard boardID={'topLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'topMiddle') || (superTTTState.prevMove === 'None' && superTTTState['topMiddle'] === 'blank') ? styles.topMiddleSelected : styles.topMiddle}>
                            <TTTBoard boardID={'topMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'topRight') || (superTTTState.prevMove === 'None' && superTTTState['topRight'] === 'blank') ? styles.topRightSelected : styles.topRight}>
                            <TTTBoard boardID={'topRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={(superTTTState.prevMove === 'middleLeft') || (superTTTState.prevMove === 'None' && superTTTState['middleLeft'] === 'blank') ? styles.middleLeftSelected : styles.middleLeft}>
                            <TTTBoard boardID={'middleLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'middleMiddle') || (superTTTState.prevMove === 'None' && superTTTState['middleMiddle'] === 'blank') ? styles.middleMiddleSelected : styles.middleMiddle}>
                            <TTTBoard boardID={'middleMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'middleRight') || (superTTTState.prevMove === 'None' && superTTTState['middleRight'] === 'blank') ? styles.middleRightSelected : styles.middleRight}>
                            <TTTBoard boardID={'middleRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={(superTTTState.prevMove === 'bottomLeft') || (superTTTState.prevMove === 'None' && superTTTState['bottomLeft'] === 'blank') ? styles.bottomLeftSelected : styles.bottomLeft}>
                            <TTTBoard boardID={'bottomLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'bottomMiddle') || (superTTTState.prevMove === 'None' && superTTTState['bottomMiddle'] === 'blank') ? styles.bottomMiddleSelected : styles.bottomMiddle}>
                            <TTTBoard boardID={'bottomMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.prevMove === 'bottomRight') || (superTTTState.prevMove === 'None' && superTTTState['bottomRight'] === 'blank') ? styles.bottomRightSelected : styles.bottomRight}>
                            <TTTBoard boardID={'bottomRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
      
  );
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


}

/*
export const styles = {
    topLeft : {
        borderTop: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderRight: BORDER_SIZE, 
        borderBottom: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
        //borderColor: BORDER_COLOR
    },

    topLeftSelected : {
        borderTop: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderRight: BORDER_SIZE, 
        borderBottom: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
        //borderColor: BORDER_COLOR
    },

    topMiddle : {
        borderTop: BORDER_SIZE,
        borderRight: BORDER_SIZE, 
        borderBottom: BORDER_SIZE, 
        borderLeft: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    topMiddleSelected : {
        borderTop: BORDER_SIZE,
        borderRight: BORDER_SIZE, 
        borderBottom: BORDER_SIZE, 
        borderLeft: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
    },
    
    topRight : {
        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE, 
        borderBottom: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR

    },

    topRightSelected : {
        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE, 
        borderBottom: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR

    },

    middleLeft : {
        borderTop: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderRight: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderRightStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    middleLeftSelected : {
        borderTop: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderRight: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderRightStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
    },
    middleMiddle : {
        border: BORDER_SIZE,
        borderColor: BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleMiddleSelected : {
        border: BORDER_SIZE,
        borderColor: SELECTED_BORDER_COLOR,
        borderStyle: BORDER_STYLE
    },
    middleRight : {

        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
        
    },
    middleRightSelected : {

        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderTopStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
        
    },
    
    bottomLeft : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,

    },
    bottomLeftSelected : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR,

    },
    bottomMiddle : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    bottomMiddleSelected : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderLeft: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
    },
    bottomRight : {
        borderLeft: BORDER_SIZE, 
        borderTop: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    bottomRightSelected : {
        borderLeft: BORDER_SIZE, 
        borderTop: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: SELECTED_BORDER_COLOR
    }

}
*/



export default TicTacToe;

import '../App.css';
import React from "react";
import { Button, ButtonGroup, Divider, IconButton, useTheme, Grid, colors } from '@mui/material';
import Box from '@mui/material/Box';
import TTTBoard from '../components/TTTBoard';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import ClearAllIcon from '@mui/icons-material/ClearAll';

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

    return (
        <Grid container direction='column' sx={{padding: '10px'}}>
          <Box sx={{border: '4px solid green', padding: '20px'}}>
            Tic tac Toe
          </Box>


            <div className="imageWrapper">
                <img style={{position: 'absolute', zIndex: "1"}} src="https://thumbs.dreamstime.com/b/cool-wallpapers-backgrounds-check-out-our-68126782.jpg" />
                <img style={{position: 'absolute', zIndex: "0"}} src="https://marketplace.canva.com/EAFPzbZddXA/1/0/1600w/canva-black-and-white%2C-illustration-and-cool%2C-desktop-wallpaper-Oy1LJ3M9RIs.jpg" />
            </div>

            {//console.log(document.getElementById('img1').style.zIndex)
           /*
                    <div className="imageWrapper">
                    <img className="overlayImage1" id='img1' src="https://marketplace.canva.com/EAFPzbZddXA/1/0/1600w/canva-black-and-white%2C-illustration-and-cool%2C-desktop-wallpaper-Oy1LJ3M9RIs.jpg" />
                    <img className="overlayImage2" src="https://thumbs.dreamstime.com/b/cool-wallpapers-backgrounds-check-out-our-68126782.jpg" />
                    </div>
                */
            }
          {/*
        <Grid container className='imageWrapper'>
            <div className='imageWrapper'><LayersClearIcon className='overlayImage'/></div>
            <div className='imageWrapper'><ClearAllIcon className='overlayImage' /></div>
          <Grid className='overlayImage' item sx={
            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topLeft'] === 'blank') || (superTTTState.winningCombo.includes('topLeft')) ? styles.topLeftSelected : styles.topLeft
            }>
            <TTTBoard boardID={'topLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
        </Grid>
        </Grid>
        */}




            <Grid container direction='row' spacing={0}>
                <Grid item minWidth='10vh' width='40vh' sx={{border:'4px solid green', padding: '10px'}}>THIS</Grid>

                <Grid item>
                    {/*Tic tac toe board*/}
                    <Grid container direction='row'>
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topLeft'] === 'blank') || (superTTTState.winningCombo.includes('topLeft')) ? styles.topLeftSelected : styles.topLeft
                            }>
                            <TTTBoard boardID={'topLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={
                            (superTTTState.winner === 'None' && superTTTState.prevMove === 'topMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topMiddle'] === 'blank') || (superTTTState.winningCombo.includes('topMiddle')) ? styles.topMiddleSelected : styles.topMiddle}>
                            <TTTBoard boardID={'topMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'topRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['topRight'] === 'blank') || (superTTTState.winningCombo.includes('topRight')) ? styles.topRightSelected : styles.topRight}>
                            <TTTBoard boardID={'topRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleLeft'] === 'blank') || (superTTTState.winningCombo.includes('middleLeft')) ? styles.middleLeftSelected : styles.middleLeft}>
                            <TTTBoard boardID={'middleLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleMiddle'] === 'blank') || (superTTTState.winningCombo.includes('middleMiddle')) ? styles.middleMiddleSelected : styles.middleMiddle}>
                            <TTTBoard boardID={'middleMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'middleRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['middleRight'] === 'blank') || (superTTTState.winningCombo.includes('middleRight')) ? styles.middleRightSelected : styles.middleRight}>
                            <TTTBoard boardID={'middleRight'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomLeft') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomLeft'] === 'blank') || (superTTTState.winningCombo.includes('bottomLeft')) ? styles.bottomLeftSelected : styles.bottomLeft}>
                            <TTTBoard boardID={'bottomLeft'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomMiddle') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomMiddle'] === 'blank') || (superTTTState.winningCombo.includes('bottomMiddle')) ? styles.bottomMiddleSelected : styles.bottomMiddle}>
                            <TTTBoard boardID={'bottomMiddle'} superTTTState={superTTTState} setSuperTTTState={setSuperTTTState} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
                        </Grid>
                        <Grid item sx={(superTTTState.winner === 'None' && superTTTState.prevMove === 'bottomRight') || (superTTTState.winner === 'None' && superTTTState.prevMove === 'None' && superTTTState['bottomRight'] === 'blank') || (superTTTState.winningCombo.includes('bottomRight')) ? styles.bottomRightSelected : styles.bottomRight}>
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




export default TicTacToe;

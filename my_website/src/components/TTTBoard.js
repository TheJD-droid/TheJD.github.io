import React from "react";
import BoardSquare from "./BoardSquare";
import { Grid, colors } from "@mui/material";

import TTTState from "./TTTState";
import {checkWin} from "./TicTacToeLogic";


//const BORDER_COLOR = 'black';
const BORDER_SIZE = '2px';
const BORDER_STYLE = 'solid';
const SELECTED_BORDER_COLOR = colors.blueGrey[300];
const BORDER_COLOR = colors.blueGrey[300];

export default function TTTBoard(props) {

    const [currentState, setState] = React.useState(new TTTState('blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'));
    //console.log(currentState);
    //setState({topLeft : 'X'})
    //currentState.topLeft = 'X'
    //console.log(currentState)
    //checkWin(currentState)
    return(
<Grid item>
          {/* First row */}
          <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.topLeft}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'topLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              
              <Grid item sx={styles.topMiddle}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'topMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.topRight}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'topRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              
            </Grid>
            </Grid>
            {/* Second Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.middleLeft}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'middleLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.middleMiddle}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'middleMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.middleRight}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'middleRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
        </Grid> 
            </Grid>
            {/* End of row */}
            {/* Third Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.bottomLeft}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'bottomLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.bottomMiddle}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'bottomMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.bottomRight}>
                  <BoardSquare boardID={props.boardID} superTTTState={props.superTTTState} setSuperTTTState={props.setSuperTTTState} 
                  currentState = {currentState} boardPos = {'bottomRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              
        </Grid>
            </Grid>
            {/* End of row */}
            
          {/*End of tictactoe board*/}

          </Grid>
    );
}

export const styles = {
    topLeft : {
        borderRight: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    /*
    topLeft : {
        borderRight: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },*/

    topMiddle : {
        borderRight: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderLeft: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderLeftStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    },
    
    topRight : {
        borderLeft: BORDER_SIZE,
        borderBottom: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderBottomStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
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
    middleMiddle : {
        border: BORDER_SIZE,
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
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
    
    bottomLeft : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
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
    bottomRight : {
        borderLeft: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderLeftStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR
    }

}


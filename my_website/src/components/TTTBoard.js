import React from "react";
import BoardSquare from "./BoardSquare";
import { Grid } from "@mui/material";

import TTTState from "./TTTState";
import {checkWin} from "./TicTacToeLogic";


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
                  <BoardSquare currentState = {currentState} boardPos = {'topLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              
              <Grid item sx={styles.topMiddle}>
                  <BoardSquare currentState = {currentState} boardPos = {'topMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.topRight}>
                  <BoardSquare currentState = {currentState} boardPos = {'topRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              
            </Grid>
            </Grid>
            {/* Second Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.middleLeft}>
                  <BoardSquare currentState = {currentState} boardPos = {'middleLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.middleMiddle}>
                  <BoardSquare currentState = {currentState} boardPos = {'middleMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.middleRight}>
                  <BoardSquare currentState = {currentState} boardPos = {'middleRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
        </Grid> 
            </Grid>
            {/* End of row */}
            {/* Third Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.bottomLeft}>
                  <BoardSquare currentState = {currentState} boardPos = {'bottomLeft'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.bottomMiddle}>
                  <BoardSquare currentState = {currentState} boardPos = {'bottomMiddle'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
              </Grid>
              <Grid item sx={styles.bottomRight}>
                  <BoardSquare currentState = {currentState} boardPos = {'bottomRight'} checkWin={checkWin} playerTurn={props.playerTurn} setPlayerTurn={props.setPlayerTurn}/>
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
        borderRight: '2px solid black', 
        borderBottom: '2px solid black'
    },

    topMiddle : {
        borderRight: '2px solid black', 
        borderBottom: '2px solid black', 
        borderLeft: '2px solid black'
    },
    
    topRight : {
        borderLeft: '2px solid black', 
        borderBottom: '2px solid black'
    },

    middleLeft : {
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
        borderRight: '2px solid black'
    },
    middleMiddle : {
        border: '2px solid black'
    },
    middleRight : {
        borderTop: '2px solid black',
        borderLeft: '2px solid black',
        borderBottom: '2px solid black'
    },
    
    bottomLeft : {
        borderRight: '2px solid black', 
        borderTop: '2px solid black'
    },
    bottomMiddle : {
        borderRight: '2px solid black', 
        borderTop: '2px solid black', 
        borderLeft: '2px solid black'
    },
    bottomRight : {
        borderLeft: '2px solid black', 
        borderTop: '2px solid black'
    }

}


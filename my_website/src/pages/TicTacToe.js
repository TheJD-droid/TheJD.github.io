import '../App.css';
import { Button, ButtonGroup, Divider, IconButton, useTheme, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import BoardSquare from './../components/BoardSquare';
import Box from '@mui/material/Box';
import TTTBoard from '../components/TTTBoard';
//import { styles } from '../components/TTTBoard';
//import TicTacToeLogic from '../TicTacToeLogic';

const BORDER_COLOR = 'black';
const BORDER_SIZE = '5px';
const BORDER_STYLE = 'solid';


//initial state
//{topLeft: 'blank', topMiddle: 'blank', topRight: 'blank', middleLeft: 'blank', middleMiddle: 'blank', middleRight: 'blank', bottomLeft: 'blank', bottomMiddle: 'blank', bottomRight: 'blank'}

function TicTacToe() {

    {//TicTacToeLogic()
        }
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
                        <Grid item sx={styles.topLeft}><TTTBoard /></Grid>
                        <Grid item sx={styles.topMiddle}><TTTBoard /></Grid>
                        <Grid item sx={styles.topRight}><TTTBoard /></Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={styles.middleLeft}><TTTBoard /></Grid>
                        <Grid item sx={styles.middleMiddle}><TTTBoard /></Grid>
                        <Grid item sx={styles.middleRight}><TTTBoard /></Grid>
                    </Grid>
                    <Grid container direction='row'>
                        <Grid item sx={styles.bottomLeft}><TTTBoard /></Grid>
                        <Grid item sx={styles.bottomMiddle}><TTTBoard /></Grid>
                        <Grid item sx={styles.bottomRight}><TTTBoard /></Grid>
                    </Grid>


                </Grid>
            </Grid>
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
        borderColor: BORDER_COLOR,
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
    
    bottomLeft : {
        borderRight: BORDER_SIZE,
        borderTop: BORDER_SIZE,
        borderRightStyle: BORDER_STYLE,
        borderTopStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,

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



export default TicTacToe;

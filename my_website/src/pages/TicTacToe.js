import '../App.css';
import { Button, ButtonGroup, Divider, IconButton, useTheme, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import BoardSquare from './../components/BoardSquare';
import Box from '@mui/material/Box';

function TicTacToe() {

  return (
        <Grid container direction='column' sx={{border: '4px solid green', padding: '0px'}}>
          <Box sx={{border: '4px solid green', padding: '20px'}}>
            Tic tac Toe
          </Box>


          <Grid container direction='row' spacing={5}>
          <Grid item minWidth='60vh'></Grid>

        <Grid item>
        {/*Tic tac toe board*/}
        <Grid item>
          {/* First row */}
          <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* Second Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Third Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Fourth Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Fifth Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
          {/* Sixth Row */}
          <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Seventh Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Eighth Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
            {/* Ninth Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
              <Grid item>
                  <BoardSquare />
              </Grid>
            </Grid>
            </Grid>
            {/* End of row */}
        
          </Grid>
          {/*End of tictactoe board*/}

          </Grid>

        </Grid>
        </Grid>
      
  );
}

export default TicTacToe;

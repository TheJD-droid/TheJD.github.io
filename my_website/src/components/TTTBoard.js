import React from "react";
import BoardSquare from "./BoardSquare";
import { Grid } from "@mui/material";



export default function TTTBoard() {
    return(
<Grid item>
          {/* First row */}
          <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.topLeft}>
                  <BoardSquare />
              </Grid>
              
              <Grid item sx={styles.topMiddle}>
                  <BoardSquare />
              </Grid>
              <Grid item sx={styles.topRight}>
                  <BoardSquare />
              </Grid>
              
            </Grid>
            </Grid>
            {/* Second Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.middleLeft}>
                  <BoardSquare />
              </Grid>
              <Grid item sx={styles.middleMiddle}>
                  <BoardSquare />
              </Grid>
              <Grid item sx={styles.middleRight}>
                  <BoardSquare />
              </Grid>
        </Grid> 
            </Grid>
            {/* End of row */}
            {/* Third Row */}
            <Grid item>
        <Grid container spacing={0} direction='row' bgcolor={'white'}>
              <Grid item sx={styles.bottomLeft}>
                  <BoardSquare />
              </Grid>
              <Grid item sx={styles.bottomMiddle}>
                  <BoardSquare />
              </Grid>
              <Grid item sx={styles.bottomRight}>
                  <BoardSquare />
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

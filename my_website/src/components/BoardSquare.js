import React from "react";
import { Button, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CropDinIcon from '@mui/icons-material/CropDin';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Box from '@mui/material/Box';
//import checkWin from 

export default function BoardSquare() {
    
    const [flag, setFlag] = React.useState('blank');


    const handleClick = () => {
        //checkWin()
        if (flag == 'blank') {
            setFlag('X');
        }
        else if (flag == 'X') {
            setFlag('O');
        }
        else if (flag == 'O') {
            setFlag('blank');
        }
        else {
            setFlag('blank');
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
    if (flag == 'O') {
        //return <RadioButtonUncheckedIcon />
        return <RadioButtonUncheckedIcon sx={{color: 'red'}}/>
        
    }
    else if (flag == 'X') {
        //return <ClearIcon />
        return <ClearIcon sx={{color: "blue"}}/>
    }
    else {
        return <LensBlurIcon />;
    }

}
  


  
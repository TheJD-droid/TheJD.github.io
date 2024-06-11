import React from "react";
import { Button, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CropDinIcon from '@mui/icons-material/CropDin';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Box from '@mui/material/Box';
export default function BoardSquare() {
    const [flag, setFlag] = React.useState('blank');


const handleClick = () => {
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
    <Box sx={{border: '4px solid green', padding: '5px'}}>
        <IconButton onClick={handleClick}>
            {displayIcon(flag)}
        </IconButton>
    </Box>
  );

}

function displayIcon(flag) {
    if (flag == 'O') {
        return <RadioButtonUncheckedIcon />
        
    }
    else if (flag == 'X') {
        return <ClearIcon />
    }
    else {
        return <LensBlurIcon />;
    }

}
  


  
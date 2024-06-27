import React from "react";
//import { Drawer } from "@mui/material";
//import { Button} from "@mui/material";
//import { Box } from "@mui/material"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TempDrawer({DrawerContent, bttnText, anchorTo}) {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    


    return (
      <div>
        <Button variant='contained' onClick={toggleDrawer(true)}>{bttnText}</Button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor={anchorTo}>
          {DrawerContent}
        </Drawer>
      </div>
    );
  }
  
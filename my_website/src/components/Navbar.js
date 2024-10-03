import {Outlet, Link} from 'react-router-dom';
import { Button, ButtonGroup, Divider } from '@mui/material';
import React from 'react';


function Navbar() {

    return(
        <>

            <nav>
                <ButtonGroup>
                    
                    <Button variant='contained' href='/TheJDProjects'>Home</Button>
                    <Button variant='contained' href='#/TicTacToe'>Tic Tac Toe</Button>
                    <Button variant='contained' href='#/BalloonGame'>Balloon Game</Button>

                </ButtonGroup>
            </nav>
            
            
        </>
    );
};

// function handleSetCurrentStyle() {
//     setCurrentStyle('TTT');
// }

export default Navbar;
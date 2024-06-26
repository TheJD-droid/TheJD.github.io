import {Outlet, Link} from 'react-router-dom';
import { Button, ButtonGroup, Divider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { retrieveStyle } from '../styles';


function Navbar(props) {

//const Navbar = (chosenStyle, setChosenStyle) => {
    return(
        <>

            <nav>
                <ButtonGroup>
                    
                    <Button variant='contained' href='/'>Home</Button>
                    <Divider orientation='vertical' />
                    <Button variant='contained' href='/TicTacToe' onClick={() => {
                        props.setClasses({header: 'AppTTT-header', body: 'AppTTT-body'});
                        console.log(props.currentStyle);
                    }}>Tic Tac Toe</Button>
                    <Button variant='contained' href='/WinnerAnimation'>Explosion</Button>

                </ButtonGroup>
            </nav>
            
            
        </>
    );
};

// function handleSetCurrentStyle() {
//     setCurrentStyle('TTT');
// }

export default Navbar;
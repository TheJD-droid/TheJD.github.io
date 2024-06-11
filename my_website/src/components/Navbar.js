import {Outlet, Link} from 'react-router-dom';
import { Button, ButtonGroup, Divider } from '@mui/material';
const Navbar = () => {
    return(
        <>

            <nav>
                <ButtonGroup>
                    
                    <Button variant='contained' href='/'>Home</Button>
                    <Divider orientation='vertical' />
                    <Button variant='contained' href='/TicTacToe'>Tic Tac Toe</Button>

                </ButtonGroup>
            </nav>
            
            
        </>
    );
};

export default Navbar;
import {Outlet, Link} from 'react-router-dom';
import { Button, ButtonGroup, Divider } from '@mui/material';
const Layout = () => {
    return(
        <>

            <nav>
            <ButtonGroup>
                <Button variant='contained' href='/ticTacToe'>Tic Tac Toe</Button>
                <Divider orientation='vertical'/>
                <Button href='/'>Home</Button>
                </ButtonGroup>
            </nav>
            {/*
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/ticTacToe'>Tic Tac Toe</Link>
                    </li>
                </ul>
            </nav>

                */}
            <Outlet />
        </>
    );
};

export default Layout;
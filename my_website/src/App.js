import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Divider, useTheme } from '@mui/material';
import Home from './pages/Home';
import ticTacToe from './pages/ticTacToe';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {



  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='ticTacToe' element={<ticTacToe />} />
            </Route>
          </Routes>
      </BrowserRouter>
      {/*
        <ButtonGroup>
        <Button href='https://youtube.com' variant='contained'>Tic Tac Toe</Button>
          <Divider orientation='vertical'/>
        <Button>Chess</Button>
        </ButtonGroup>
        */}
      </header>
      {/*
      <body className='App-body'>
        <div>
          <>{Home()}</>
        </div>
      </body>
      */}
    </div>
    
  );
  
}

export default App;

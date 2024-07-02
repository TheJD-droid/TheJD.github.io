import logo from './logo.svg';
import './App.css';
import './AppTTT.css';
import { Button, ButtonGroup, Divider, useTheme } from '@mui/material';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Winner from './pages/BalloonPage';
import React, { useCallback, useEffect, useContext } from 'react';
import BalloonPage from './pages/BalloonPage';


function App() {




   return (
    <div className="App" id='root'>
      <BrowserRouter>
      <div className="App-header">
            <Navbar />
      </div>
          <div className="App-body">
          
        <Routes>
            
              <Route index element={<Home />} />
              <Route path='TicTacToe' element={<TicTacToe />} />
              <Route path='BalloonPage' element={<BalloonPage />} />
            
          </Routes>        
        </div>
        </BrowserRouter>
      
    </div>
    
  );
  
}

export default App;



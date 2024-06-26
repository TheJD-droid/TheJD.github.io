import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Divider, useTheme } from '@mui/material';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Winner from './pages/WinnerAnimation';
import React from 'react';
import { useState } from 'react';

import { retrieveStyle } from './styles';

function App() {

  const [currentStyle, setCurrentStyle] =  React.useState(retrieveStyle('default'));
  
  return (
    <div className="App" id='root'>
      <BrowserRouter>
      <div style={currentStyle.AppHeader}>
            <Navbar />
      </div>
          <div style={currentStyle.AppBody}>
          
        <Routes>
            
              <Route index element={<Home />} />
              <Route path='TicTacToe' element={<TicTacToe />} />
              <Route path='WinnerAnimation' element={<Winner />} />
            
          </Routes>        
        </div>
        </BrowserRouter>
      
    </div>
    
  );
  
}

export default App;



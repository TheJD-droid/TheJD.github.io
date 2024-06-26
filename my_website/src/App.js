import logo from './logo.svg';
import './App.css';
import './AppTTT.css';
import { Button, ButtonGroup, Divider, useTheme } from '@mui/material';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Winner from './pages/WinnerAnimation';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

import { retrieveStyle } from './styles';

function App() {

  const [currentStyle, setCurrentStyle] =  React.useState({header: 'App-header', body: 'App-body'});
  const [classes, setClasses] = React.useState({header: 'App-header', body: 'App-body'})
  // const handleSetCurrentStyle = (classnames) => {
  //   setCurrentStyle(classnames)
  // } 
  // const handleStyle = useCallback((currentStyle) => {
  //   let currentHeader = 'App-header';
  //   let currentBody = 'App-body';
  //   console.log(currentStyle)
  //   if (currentStyle) {

  //     if (currentStyle.header) {
  //       currentHeader = currentStyle.header;
  //       if (currentStyle.body) {
  //         currentBody = currentStyle.body;
  //       }
  //     }
  //   }


  //   return {header: currentHeader, body: currentBody}
     
  //  }, [currentStyle]);


  //  useEffect(() => {
  //   setClasses(currentStyle)
  // }, [currentStyle]);
  


  const handleSetClasses = (p) => {
    setClasses(p);
  }


   return (
    <div className="App" id='root'>
      <BrowserRouter>
      <div className={classes.header}>
            <Navbar classes={classes} setClasses={handleSetClasses}/>
      </div>
          <div className={classes.body}>
          
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



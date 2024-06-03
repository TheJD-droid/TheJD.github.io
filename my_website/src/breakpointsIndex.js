import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



/*
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



function MyComponent() {
  const theme = useTheme();
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  //const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
  
  

  return (
    <div>
      Current breakpoint is considered small: {isSmallScreen ? 'Yes' : 'No'}
    </div>
  );
}
*/

import { useMediaQuery, useTheme } from '@mui/material';

function MyComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isBetweenSmallAndLarge = useMediaQuery(theme.breakpoints.between('sm', 'xl'));
  
  return (
    <div>
      {isSmallScreen && <p>This content is for small screens</p>}
      {isMediumScreen && <p>This content is for medium screens and up</p>}
      {isBetweenSmallAndLarge && <p>This content is for medium screens and up</p>}
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <MyComponent><App /></MyComponent>
    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";



export function retrieveStyle(styleName) {
    switch(styleName) {
        case 'default': 
            return defaultStyle;
        case 'TTT':
            return TTTStyle;
        default:
            console.log('ERROR! NO STYLE DETECTED');
            return defaultStyle;
    }

}

const defaultStyle = {
    AppHeader: {
      backgroundColor: '#23272e',
      minHeight: '20vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white'
    },
  
    AppBody: {
      backgroundColor: '#333842',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white'
  
    },
  
  }
  
  const TTTStyle = {
    
    
    //AppBodyTTT
    AppBody: {
      backgroundColor: '#333842',
      minHeight: '80vh',
      minWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'blue'
  
    },
  
    //AppHeaderTTT
    AppHeader: {
      backgroundColor: '#23272e',
      minHeight: '20vh',
      minWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'blue'
    }
  
  }
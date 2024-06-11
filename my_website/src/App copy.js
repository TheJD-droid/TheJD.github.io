import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button onClick={stuff}>Find Children</Button>
    </div>
    

  );
}

function stuff2() {
  const parentNode = document.getElementById('root');
  console.log('Finding children');
  // Using querySelector on the parent (recommended)
  const specificChild = parentNode.querySelector('.App-header'); 
  console.log(specificChild);
  // Using children and converting to array
  const childArray = Array.from(parentNode.children);
  //console.log(parentNode);
  //console.log(childArray);
  const filteredChildren = childArray.filter(child => child.classList.contains('App'));
  console.log(filteredChildren);
  //console.log(childArray);
}

function stuff() {
  console.log('Finding specific child nodes');

  //const newRoot = document.getElementById('root');
  var parentElement = document.getElementById('root');
  var children = parentElement.children; // or parentElement.childNodes

  console.log(parentElement.childNodes.querySelector('.App'));

  for (var i = 0; i < children.length; i++) {
      var child = children[i];
      // Check if the child is an element node if using childNodes
      if (child.nodeType === Node.ELEMENT_NODE) {
          var foundElement = child.querySelector('.App-header');
          if (foundElement) {
              console.log(foundElement);
          }
      }
  }

  Array.prototype.forEach.call(parentElement.children, function(child) {
    var secondElement = child.querySelector('.App-logo');
    if (secondElement) {
        console.log(secondElement);
    }
});
             
  console.log(parentElement);
  console.log(foundElement)

}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


class Game {
  constructor() {
    this.balloons = new Array(100).fill(true); // Start with 100 balloons
    this.popped = 0;
    this.playing = true;
  }

  playRound() {
    if (Math.random() < 0.5) { // Flip a coin
      this.playing = false;
      return;
    } else {
      let balloonIndex = Math.floor(Math.random() * this.balloons.length);
      if (this.balloons[balloonIndex]) {
        this.popped++;
      }
      this.balloons[balloonIndex] = false; // Mark balloon as popped
    }
    return;
  }

  getScore() {
    return this.popped;
  }

  isPlaying() {
    return this.playing;
  }
}

// Create a game instance
let game = new Game();

// Play rounds until the game is over
while (game.isPlaying()) {
  game.playRound();
  console.log(game.isPlaying())
}

// Print the final score
console.log(`You popped ${game.getScore()} balloons!`);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

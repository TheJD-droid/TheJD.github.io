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
    if (Math.random() < 0.01) { // Flip a coin
      this.playing = false;
    } else {
      let balloonIndex = Math.floor(Math.random() * this.balloons.length);
      if (this.balloons[balloonIndex]) {
        this.popped++;
      }
      this.balloons[balloonIndex] = false; // Mark balloon as popped
    }
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
}

// Print the final score
console.log(`You popped ${game.getScore()} balloons!`);


/*
const TOTAL_BALLOONS = 10; // You can change the number of balloons

let balloonsRemaining = TOTAL_BALLOONS;
let score = 0;

function playRound() {
  if (Math.random() < 0.5) { // Simulate fair coin toss (50/50 heads or tails)
    return false; // Tails - game ends
  } else {
    if (balloonsRemaining > 0) {
      balloonsRemaining--;
      score++;
      console.log("You popped a balloon!");
    } else {
      console.log("No more balloons to pop this round.");
    }
    return true; // Heads - keep playing
  }
}

// Game loop
while (playRound()) {
  // Keep playing rounds until playRound() returns false 
}

console.log("Game Over! Your final score:", score); 
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

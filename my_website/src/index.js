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


class ChessGameState {
  constructor() {
      this.board = this.createStartingBoard();
      this.whiteToMove = true;
      this.moveLog = [];
      this.inCheck = false;
      this.pins = [];
      this.checks = [];
      this.castlingRights = "";
  }

  printBoard() {
    for (let i = 0; i < 8; i++) {
      let line = "";
      for (let j = 0; j < 8; j++) {
        line = line.concat('', this.board[i][j] + '|');
      }
      console.log('|' + line);
    }
  }

  createStartingBoard() {
      // Initialize the 8x8 chessboard with piece placement
      // Using FEN notation for conciseness:
      //const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
      //const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/7P/RNBQKBNR w KQkq - 0 1";
      //const startingFEN = "rnbqkbnr/pppppppp/8/8/8/8/P6P/RNBQKBNR w KQkq - 0 1";
      const startingFEN = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w KQkq - 0 1";
      
      return this.boardFromFEN(startingFEN);
  }


  

  boardFromFEN(FEN) {
      // Function to create a board state from a FEN string.
      // Implementation would involve parsing the FEN string and populating the board array
      let board = [];
      //console.log(board[0]);
      for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
          board[i][j] = 'O';
        }
      }

      
      const fenArg = FEN.split(' ');
      for (let i = 0; i < 6; i++) {
        console.log(fenArg[i]);
      }

      let pos = [0, 0]
      for (let i = 0; i < fenArg[0].length; i++) {
        //console.log(fenArg[0][i]);
        switch(fenArg[0][i]) {
          case 'r': 
            board[pos[0]][pos[1]] = 'r';
            pos[1] = pos[1] + 1;
            break;
          case 'R':
            board[pos[0]][pos[1]] = 'R';
            pos[1] = pos[1] + 1;
            break;
          case 'n':
            board[pos[0]][pos[1]] = 'n';
            pos[1] = pos[1] + 1;
            break;
          case 'N':
            board[pos[0]][pos[1]] = 'N';
            pos[1] = pos[1] + 1;
            break;
          case 'b':
            board[pos[0]][pos[1]] = 'b';
            pos[1] = pos[1] + 1;
            break;
          case 'B':
            board[pos[0]][pos[1]] = 'B';
            pos[1] = pos[1] + 1;
            break;
          case 'q':
            board[pos[0]][pos[1]] = 'q';
            pos[1] = pos[1] + 1;
            break;
          case 'Q':
            board[pos[0]][pos[1]] = 'Q';
            pos[1] = pos[1] + 1;
            break;
          case 'k':
            board[pos[0]][pos[1]] = 'k';
            pos[1] = pos[1] + 1;
            break;
          case 'K':
            board[pos[0]][pos[1]] = 'K';
            pos[1] = pos[1] + 1;
            break;
          case 'p':
            board[pos[0]][pos[1]] = 'p';
            pos[1] = pos[1] + 1;
            break;
          case 'P':
            board[pos[0]][pos[1]] = 'P';
            pos[1] = pos[1] + 1;
            break;
          case '/':
            pos[0] = pos[0] + 1;
            pos[1] = 0;
            break;
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
            pos[1] = pos[1] + parseInt((fenArg[0][i][0]));
            break;
          default:
            console.log("Error: Invalid FEN notation. Default case hit. fenArg[0][" + i + "]: " + fenArg[0][i]);
            return -1;
        }

      }//end parsing of piece positions


      //validating FEN notation of who's move. We can remove this after we create a way to validate the FEN notatation at the start.
      if (fenArg[1] !== 'w' && fenArg[1] !== 'b') {
        console.log("Error, invalid second argument on FEN notation. Who's move is it? fenArg[1] = " + fenArg[1]);
        return -1;
      }

      //Parsing who's move it is
      this.whiteToMove = (fenArg[1] === 'w');


      console.log("fenArg[2]: " + fenArg[2]);

      //Parsing castling rights
      this.castlingRights = "".concat("", fenArg[2]);
      console.log(this.castlingRights);

    return board;

  }

  makeMove(move) {
      // move would be an object with properties like: startSq, endSq, pieceMoved, pieceCaptured, etc
      this.board[move.startSq] = null;
      this.board[move.endSq] = move.pieceMoved;
      this.moveLog.push(move); // Log the move
      this.whiteToMove = !this.whiteToMove; // Switch turns
      // additional logic here for castling, pawn promotion, en passant capture
  }

  // Additional methods can be added for:
  // - Undoing a move
  // - Determining if a move is legal (requires implementing move validation rules)
  // - Checking for checkmate or stalemate
  // - Generating all legal moves in a position
  // - Serializing the game state to a string (e.g., using FEN or PGN)

  // Helper functions
  getPiece(square) {
      return this.board[square];
  }

  // ... other helper functions for checking square color, algebraic notation etc.
}

const myChessGame = new ChessGameState()
myChessGame.printBoard()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

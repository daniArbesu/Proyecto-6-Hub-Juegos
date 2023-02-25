import { useState, useEffect } from 'react';
import { INITIAL_BOARD } from '../../constants';
import GameOver from '../../utils/tictactoe';
import { TTTBoardWrapper, TTTButton } from './styles';

// Variable to control the player turn
let playerXTurn = true;

function TTTBoard() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // reset the game everytime we click on the finish button
    setBoard(INITIAL_BOARD);
  }, []);

  useEffect(() => {
    // everytime there's a user input we check if the game is over
    if (GameOver(board)) {
      setIsGameOver(!isGameOver);
    }
  }, [board]);

  const handleBoardChange = (id) => {
    const player = playerXTurn ? 'X' : 'O';
    const [row, column] = id.split('-');

    if (!board[row][column]) {
      const newBoard = board.map((row) => row.slice());
      newBoard[row][column] = player;
      playerXTurn = !playerXTurn;
      setBoard(newBoard);
    }
  };

  const renderBoard = () => {
    const boardView = [];

    for (let row in board) {
      for (let column in board) {
        boardView.push(
          <TTTButton
            id={`${row}-${column}`}
            key={`${row}-${column}`}
            disabled={isGameOver}
            onClick={(e) => handleBoardChange(e.target.id)}
          >
            {board[row][column]}
          </TTTButton>
        );
      }
    }

    return boardView;
  };

  return (
    <div>
      {isGameOver ? (
        <h2>
          Player <b>{playerXTurn ? 'O' : 'X'}</b> Won!!
        </h2>
      ) : (
        <p>
          Player <b>{playerXTurn ? 'X' : 'O'}</b> turn
        </p>
      )}
      <TTTBoardWrapper>{renderBoard()}</TTTBoardWrapper>
    </div>
  );
}

export default TTTBoard;

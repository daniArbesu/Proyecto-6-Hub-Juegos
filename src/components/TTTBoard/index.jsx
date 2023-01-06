import { useState, useEffect } from 'react';
import { INITIAL_BOARD } from '../../constants';
import GameOver from '../../utils/tictactoe';
import { TTTBoardWrapper, TTTButton } from './styles';

// Variable to control the player turn
let playerXTurn = true;

function TTTBoard() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [isGameOver, setIsGameOver] = useState(false);

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
    const boardView = board.map((row, rowIndex) => {
      return row.map((_, columnIndex) => {
        return (
          <TTTButton
            id={`${rowIndex}-${columnIndex}`}
            key={`${rowIndex}-${columnIndex}`}
            disabled={isGameOver}
            onClick={(e) => handleBoardChange(e.target.id)}
          >
            {board[rowIndex][columnIndex]}
          </TTTButton>
        );
      });
    });

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

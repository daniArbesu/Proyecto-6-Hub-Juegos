import { useState, useEffect, useRef } from 'react';
import { INITIAL_BOARD, PLAYERS } from '../../constants';
import gameOver, { randomPlayer } from '../../utils/tictactoe';
import { TTTBoardWrapper, TTTButton } from './styles';

function TTTBoard() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const turn = useRef(randomPlayer());
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // everytime there's a user input we check if the game is over
    if (gameOver(board)) {
      setIsGameOver(!isGameOver);
    }
  }, [board]);

  const handleBoardChange = (id) => {
    const player = turn.current;
    const [row, column] = id.split('-');
    const isCellEmpty = !board[row][column];

    if (isCellEmpty) {
      const newBoard = structuredClone(board);
      newBoard[row][column] = player;
      setBoard(newBoard);
      const newTurn = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
      turn.current = newTurn;
    }
  };

  const renderBoard = () => {
    const boardView = board.map((row, rowIndex) => {
      return row.map((_, columnIndex) => {
        return (
          <TTTButton
            id={`${rowIndex}-${columnIndex}`}
            // eslint-disable-next-line react/no-array-index-key
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
          Player <b>{turn.current}</b> Won!!
        </h2>
      ) : (
        <p>
          Player <b>{turn.current}</b> turn
        </p>
      )}
      <TTTBoardWrapper>{renderBoard()}</TTTBoardWrapper>
    </div>
  );
}

export default TTTBoard;

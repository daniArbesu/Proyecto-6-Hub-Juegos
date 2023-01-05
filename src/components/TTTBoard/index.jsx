import confetti from 'canvas-confetti';
import { useState, useRef } from 'react';
import { INITIAL_BOARD, PLAYERS } from '../../constants/tictactoe';
import checkWinner, { checkDraw, randomPlayer } from '../../utils/tictactoe';
import WinnerModal from '../WinnerModal';
import { TTTBoardWrapper, TTTButton } from './styles';

function TTTBoard() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const turn = useRef(randomPlayer());
  const winner = useRef(null);

  const resetGame = () => {
    setBoard(INITIAL_BOARD);
    turn.current = randomPlayer();
    winner.current = null;
  };

  const handleBoardChange = (id) => {
    const player = turn.current;
    const [row, column] = id.split('-');
    const isCellEmpty = !board[row][column];

    if (isCellEmpty) {
      // set new board
      const newBoard = structuredClone(board);
      newBoard[row][column] = player;
      setBoard(newBoard);
      // change turn
      const newTurn = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
      turn.current = newTurn;
      // check for winner
      const newWinner = checkWinner(newBoard, player);
      if (newWinner) {
        confetti();
        winner.current = newWinner;
      } else if (checkDraw(newBoard)) {
        // check if there was a draw
        winner.current = 'draw';
      }
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
            disabled={!!winner.current}
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
      {winner.current ? (
        <WinnerModal winner={winner.current} resetGame={resetGame} />
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

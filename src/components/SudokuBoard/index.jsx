import confetti from 'canvas-confetti';
import { useEffect, useRef, useState } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { isSudokuCompleted, isSudokuCorrect } from '../../utils/sudoku';
import WinnerModal from '../WinnerModal';
import SudokuWrapper from './styles';

let modalText = '';

function SudokuBoard() {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const isCompleted = useRef(false);
  const isCorrect = useRef(null);
  const [displayBoard, setDisplayBoard] = useState([]);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setDisplayBoard(newBoard);
  }, []);

  const resetGame = () => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setDisplayBoard(newBoard);
    isCompleted.current = false;
    isCorrect.current = null;
    modalText = '';
  };

  const handleInputChange = (e) => {
    const newBoard = [...displayBoard];
    const inputIndex = e.target.id;
    const inputValue = e.target.value === '' ? null : Number(e.target.value);

    newBoard[inputIndex] = inputValue;
    setDisplayBoard(newBoard);
    // Check if the board is completely filled
    isCompleted.current = isSudokuCompleted(newBoard);
  };

  const renderSudoku = (sudokuDisplayBoard) => {
    if (!sudokuDisplayBoard) return null;

    const renderedSudoku = sudokuDisplayBoard.map((sudokuInput, index) => {
      // check if the value was given in the original board
      const isGiven = sudokuInput === sudokuBoard[index] && sudokuInput !== null;
      // to avoid using null values we change it to an empty string
      const value = sudokuInput === null ? '' : sudokuInput;

      return (
        <input
          type="number"
          value={value}
          disabled={isGiven}
          min="0"
          step="1"
          max="9"
          id={index}
          onChange={handleInputChange}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      );
    });

    return renderedSudoku;
  };

  const solveSudoku = () => {
    const solution = solvepuzzle(sudokuBoard);
    setDisplayBoard(solution);
  };

  const validateSudoku = () => {
    isCorrect.current = isSudokuCorrect(sudokuBoard, displayBoard);
    if (isCorrect.current) {
      confetti();
      modalText = 'You made it, your sudoku is correct';
    } else {
      modalText = 'Your solution was incorrect';
    }
  };

  return (
    <section>
      {isCorrect.current ? <WinnerModal text={modalText} resetGame={resetGame} /> : null}
      <SudokuWrapper>{renderSudoku(displayBoard)}</SudokuWrapper>
      <button type="button" onClick={validateSudoku} disabled={!isCompleted.current}>
        Validate Sudoku
      </button>
      <button type="button" onClick={solveSudoku}>
        Solve Sudoku
      </button>
    </section>
  );
}

export default SudokuBoard;

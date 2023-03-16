import { useEffect, useRef, useState } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { isSudokuCompleted } from '../../utils/sudoku';
import SudokuWrapper from './styles';

function SudokuBoard() {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const isCompleted = useRef(false);
  const [displayBoard, setDisplayBoard] = useState([]);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setDisplayBoard(newBoard);
  }, []);

  const handleInputChange = (e) => {
    const newBoard = displayBoard;
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
      const isGiven = sudokuInput === sudokuBoard[index] && sudokuInput !== null;

      return (
        <input
          type="number"
          value={sudokuInput}
          disabled={isGiven}
          min="0"
          step="1"
          max="9"
          id={index}
          onChange={handleInputChange}
        />
      );
    });

    return renderedSudoku;
  };

  const solveSudoku = () => {
    const solution = solvepuzzle(sudokuBoard);
    setDisplayBoard(solution);
  };

  const validateSudoku = () => {};

  return (
    <section>
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

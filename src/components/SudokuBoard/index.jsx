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

  const renderSudoku = () => {
    if (!sudokuBoard) return null;

    const renderedSudoku = sudokuBoard.map((sudokuInput, index) => {
      const isEmpty = sudokuInput === null;
      return (
        <input
          type="number"
          value={sudokuInput}
          disabled={!isEmpty}
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
    setSudokuBoard(solution);
  };

  const validateSudoku = () => {};

  return (
    <section>
      <SudokuWrapper>{renderSudoku()}</SudokuWrapper>
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

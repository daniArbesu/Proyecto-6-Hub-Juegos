import { useEffect, useState } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { SudokuWrapper } from './styles';

function SudokuBoard() {
  const [sudokuBoard, setSudokuBoard] = useState(null);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
  }, []);

  const handleSudokuSolve = () => {};

  const renderSudoku = () => {
    if (!sudokuBoard) return null;

    const renderedSudoku = sudokuBoard.map((sudokuInput) => {
      const isEmpty = sudokuInput === null;
      return (
        <input type="number" value={sudokuInput} disabled={!isEmpty} min="0" step="1" max="9" />
      );
    });

    return renderedSudoku;
  };

  const isSudokuSolved = () => {
    const solved = solvepuzzle(sudokuBoard);
    // Comprobamos si solved y sudokuBoard tienen las mismas celdas
  };

  return (
    <div>
      <SudokuWrapper>{renderSudoku()}</SudokuWrapper>
      <button type="button" onClick={handleSudokuSolve}>
        Validate Sudoku
      </button>
    </div>
  );
}

export default SudokuBoard;

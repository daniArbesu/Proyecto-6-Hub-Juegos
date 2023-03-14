import { solvepuzzle } from 'sudoku';

export const isSudokuCompleted = (board) => !board.includes(null);

export const isSudokuSolved = (sudokuBoard, displayBoard) => {
  const solution = solvepuzzle(sudokuBoard);
  // check if the current board is the same as the solution
  return solution.every((value, index) => value === displayBoard[index]);
};

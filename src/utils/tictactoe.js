import { PLAYERS } from '../constants';

const checkRows = (board) => {
  if (board.length) {
    const firstRowCheck =
      board[0][0] !== null && board[0][0] === board[0][1] && board[0][1] === board[0][2];
    const secondRowCheck =
      board[1][0] !== null && board[1][0] === board[1][1] && board[1][1] === board[1][2];
    const thirdRowCheck =
      board[2][0] !== null && board[2][0] === board[2][1] && board[2][1] === board[2][2];

    return firstRowCheck || secondRowCheck || thirdRowCheck;
  }
  return false;
};

const checkColumns = (board) => {
  if (board.length) {
    const firstColumnCheck =
      board[0][0] !== null && board[0][0] === board[1][0] && board[1][0] === board[2][0];
    const secondColumnCheck =
      board[0][1] !== null && board[0][1] === board[1][1] && board[1][1] === board[2][1];
    const thirdColumnCheck =
      board[0][2] !== null && board[0][2] === board[1][2] && board[1][2] === board[2][2];

    return firstColumnCheck || secondColumnCheck || thirdColumnCheck;
  }
  return false;
};

const checkDiagonals = (board) => {
  if (board.length) {
    const firstDiagonal =
      board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2];
    const secondDiagonal =
      board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0];

    return firstDiagonal || secondDiagonal;
  }

  return false;
};

const gameOver = (board) => {
  const wonRows = checkRows(board);
  const wonColumns = checkColumns(board);
  const wonDiagonals = checkDiagonals(board);

  return wonRows || wonColumns || wonDiagonals;
};

export const randomPlayer = () => {
  const keys = Object.keys(PLAYERS);
  return PLAYERS[keys[Math.floor(keys.length * Math.random())]];
};

export default gameOver;

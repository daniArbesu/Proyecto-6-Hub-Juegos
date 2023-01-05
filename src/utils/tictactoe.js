import { PLAYERS } from '../constants/tictactoe';

const checkRows = (board) => {
  const firstRowCheck =
    board[0][0] !== null && board[0][0] === board[0][1] && board[0][1] === board[0][2];
  const secondRowCheck =
    board[1][0] !== null && board[1][0] === board[1][1] && board[1][1] === board[1][2];
  const thirdRowCheck =
    board[2][0] !== null && board[2][0] === board[2][1] && board[2][1] === board[2][2];

  return firstRowCheck || secondRowCheck || thirdRowCheck;
};

const checkColumns = (board) => {
  const firstColumnCheck =
    board[0][0] !== null && board[0][0] === board[1][0] && board[1][0] === board[2][0];
  const secondColumnCheck =
    board[0][1] !== null && board[0][1] === board[1][1] && board[1][1] === board[2][1];
  const thirdColumnCheck =
    board[0][2] !== null && board[0][2] === board[1][2] && board[1][2] === board[2][2];

  return firstColumnCheck || secondColumnCheck || thirdColumnCheck;
};

const checkDiagonals = (board) => {
  const firstDiagonal =
    board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2];
  const secondDiagonal =
    board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0];

  return firstDiagonal || secondDiagonal;
};

const checkWinner = (board, player) => {
  const wonRows = checkRows(board);
  const wonColumns = checkColumns(board);
  const wonDiagonals = checkDiagonals(board);
  if (wonRows || wonColumns || wonDiagonals) {
    return player;
  }
  return null;
};

export const randomPlayer = () => {
  const keys = Object.keys(PLAYERS);
  return PLAYERS[keys[Math.floor(keys.length * Math.random())]];
};

export const checkDraw = (board) => {
  const simpleArray = board.flat();
  // check if any square is filled
  return simpleArray.every((element) => element !== null);
};

export default checkWinner;

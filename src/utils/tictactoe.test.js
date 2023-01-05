import { describe, it, expect } from 'vitest';
import { PLAYERS, WINNER_BOARDS_ROW_TEST } from '../constants/tictactoe';
import checkWinner from './tictactoe';

describe('Winning combinations', () => {
  it('returns true when a row has a winner', () => {
    const results = WINNER_BOARDS_ROW_TEST.map((board) => {
      const winner = checkWinner(board, PLAYERS.X);
      return winner === PLAYERS.X;
    });
    expect(results.every((result) => result === true)).toBe(true);
  });
});

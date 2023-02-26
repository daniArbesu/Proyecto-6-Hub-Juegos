import { describe, it, expect } from 'vitest';
import gameOver from './tictactoe';

const winnerBoard = [
  ['X', 'X', 'X'],
  ['O', 'O', null],
  [null, null, null]
];

describe('Winning combinations', () => {
  it('returns true when a row has a winner', () => {
    const isGameOver = gameOver(winnerBoard);
    expect(isGameOver).toBe(true);
  });
});

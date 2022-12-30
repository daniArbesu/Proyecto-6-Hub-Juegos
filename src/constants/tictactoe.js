// Constants for the Tic-Tac-Toe Game
// separate players from game logic
export const PLAYERS = {
  X: 'X',
  O: 'O'
};

// initial board
export const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export const WINNER_BOARDS_ROW_TEST = [
  [
    ['X', 'X', 'X'],
    ['O', 'O', null],
    [null, null, null]
  ],
  [
    ['X', 'O', 'O'],
    ['X', 'X', 'X'],
    [null, null, null]
  ],
  [
    ['X', 'O', 'O'],
    [null, null, null],
    ['X', 'X', 'X']
  ]
];

export const WINNER_BOARDS_COLUMN_TEST = [
  [
    ['O', 'X', null],
    ['O', 'O', null],
    ['O', null, null]
  ],
  [
    ['X', 'O', 'O'],
    ['X', 'O', 'X'],
    [null, 'O', null]
  ],
  [
    ['X', 'O', 'O'],
    [null, null, 'O'],
    ['X', 'X', 'O']
  ]
];

// Speed

export const DELAY_SLOW = 300;
export const DELAY_NORMAL = 150;
export const DELAY_FAST = 50;

// Board

export const BOARD = [];
for (let i = 0; i < 16; i++) {
  BOARD[i] = [];
  for (let j = 0; j < 30; j++) {
    BOARD[i][j] = {
      color: "#a1a6a3",
      visit: false
    };
  }
}

// Element

//element key

export const KEYS = [];
for (let i = 0; i < 16; i++) {
  KEYS[i] = [];
  for (let j = 0; j < 30; j++) {
    KEYS[i][j] = `(${i},${j})`;
  }
}

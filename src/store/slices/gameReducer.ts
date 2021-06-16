import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import RULES from '../../games.json';

const { types } = RULES;

interface RuleProps {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

interface GameSliceProps {
  balls: number[];
  game: RuleProps;
}

const initialState: GameSliceProps = {
  balls: [],
  game: types[0],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    selectGame: (state, { payload }: PayloadAction<RuleProps>) => {
      state.game = payload;
      state.balls = [];
    },
    selectBall: (state, { payload }: PayloadAction<number>) => {
      state.balls.push(payload);
      state.balls.sort((a, b) => a - b);
    },
    updateBalls: (state, { payload }: PayloadAction<number[]>) => {
      state.balls = payload;
    },
    clearBalls: state => {
      state.balls = [];
    },
  },
});

export const { selectGame, selectBall, updateBalls, clearBalls } =
  gameSlice.actions;

export default gameSlice.reducer;

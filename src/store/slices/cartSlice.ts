import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Bet = {
  id: string;
  bet_id: number;
  type: string;
  balls: number[];
  price: number;
  color: string;
  date: string;
};

export type GameProps = {
  id: string;
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
};

type RemoveItemCart = {
  id: number;
  price: number;
};

type InitialProps = {
  allGames: GameProps[];
  selectedGame: GameProps | null;
  selectedBalls: number[];
  cartContent: Bet[];
  cartTotalPrice: number;
  hasAddNewBet: boolean;
};

const initialState: InitialProps = {
  allGames: [],
  selectedGame: null,
  selectedBalls: [],
  cartContent: [],
  cartTotalPrice: 0,
  hasAddNewBet: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAllGames: (state, { payload }: PayloadAction<GameProps[]>) => {
      state.allGames = payload;
    },
    selectGame: (state, { payload }: PayloadAction<GameProps>) => {
      state.selectedGame = payload;
      state.selectedBalls = [];
    },
    selectBall: (state, { payload }: PayloadAction<number>) => {
      const alreadyHas = state.selectedBalls.some(ball => ball === payload);
      const maxNum = state.selectedGame?.['max-number'];
      const balls = state.selectedBalls;
      if (alreadyHas || balls.length === maxNum)
        state.selectedBalls = balls.filter(ball => ball !== payload);
      else state.selectedBalls = [...balls, payload];
    },
    completeBalls: state => {
      const balls = state.selectedBalls;
      const gameNumMax = state.selectedGame!['max-number'];
      const range = state.selectedGame!.range;
      const ballsRemaning = gameNumMax - balls.length;

      if (ballsRemaning > 0) {
        let arrayRandomNums: number[] = [];

        while (arrayRandomNums.length < ballsRemaning) {
          let randomNum = Math.floor(Math.random() * range + 1);
          const alreadySelected = balls.some(ball => ball === randomNum);
          const alreadyThisRandomNum = arrayRandomNums.some(
            numRandom => numRandom === randomNum
          );

          if (!alreadySelected && !alreadyThisRandomNum)
            arrayRandomNums.push(randomNum);
        }
        state.selectedBalls = [...arrayRandomNums, ...balls];
      }
    },
    removeBall: (state, { payload }: PayloadAction<number>) => {
      state.selectedBalls = state.selectedBalls.filter(
        ball => ball !== payload
      );
    },
    clearBalls: state => {
      state.selectedBalls = [];
    },
    addNewBet: (state, { payload }: PayloadAction<Bet>) => {
      state.cartContent = [payload, ...state.cartContent];
      state.cartTotalPrice += payload.price;
    },
    removeBetById: (state, { payload }: PayloadAction<RemoveItemCart>) => {
      state.cartContent = state.cartContent.filter(
        item => item.bet_id !== payload.id
      );
      state.cartTotalPrice -= payload.price;
    },
    clearCart: state => {
      state.cartContent = [];
      state.cartTotalPrice = 0;
    },
    setHasAddNewBet: state => {
      state.hasAddNewBet = true;
    },
    removeHasAddNewBet: state => {
      state.hasAddNewBet = false;
    },
  },
});

export const {
  setAllGames,
  selectGame,
  selectBall,
  completeBalls,
  removeBall,
  clearBalls,
  addNewBet,
  removeBetById,
  clearCart,
  setHasAddNewBet,
  removeHasAddNewBet,
} = cartSlice.actions;

export default cartSlice.reducer;

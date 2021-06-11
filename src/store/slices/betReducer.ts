import { createSlice } from '@reduxjs/toolkit';

interface Bet {
  id: number;
  type: string;
  balls: number[];
  price: string;
}

interface InitialProps {
  bets: Bet[];
  totalPrice: number;
}

const initialState: InitialProps = {
  bets: [],
  totalPrice: 0,
};

const betSlice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    incrementTotalPrice: (state, { payload }) => {
      state.totalPrice += payload;
    },
  },
});

export const betActions = betSlice.actions;

export default betSlice.reducer;

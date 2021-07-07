import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bet {
  id: number;
  type: string;
  balls: number[];
  price: number;
  color: string;
  date: string;
}

interface InitialProps {
  savedBets: Bet[];
}

const initialState: InitialProps = {
  savedBets: [],
};

const betSlice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    saveBet: (state, { payload }: PayloadAction<Bet[]>) => {
      state.savedBets.push(...payload);
    },
  },
});

export const { saveBet } = betSlice.actions;

export default betSlice.reducer;

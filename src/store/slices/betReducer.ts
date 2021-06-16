import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bet {
  id: number;
  type: string;
  balls: number[];
  price: number;
  color: string;
  date: string;
}

interface removeBetProps {
  id: number;
  price: number;
}

interface InitialProps {
  cartBets: Bet[];
  savedBets: Bet[];
  totalPrice: number;
}

const initialState: InitialProps = {
  cartBets: [],
  savedBets: [],
  totalPrice: 0,
};

const betSlice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    setNewBet: (state, { payload }: PayloadAction<Bet>) => {
      state.cartBets.push(payload);
      state.totalPrice += payload.price;
    },
    removeBet: (state, { payload }: PayloadAction<removeBetProps>) => {
      state.cartBets = state.cartBets.filter(bet => bet.id !== payload.id);
      state.totalPrice -= payload.price;
    },
    saveBet: (state, { payload }: PayloadAction<Bet[]>) => {
      if (state.totalPrice >= 30) {
        state.savedBets.push(...payload);
      } else {
        alert('Para salvar suas apostas, o valor miníno é de R$30,00.');
      }
    },
  },
});

export const { setNewBet, removeBet, saveBet } = betSlice.actions;

export default betSlice.reducer;

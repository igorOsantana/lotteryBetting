import { configureStore } from '@reduxjs/toolkit';

import betSlice from './slices/betSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    bets: betSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

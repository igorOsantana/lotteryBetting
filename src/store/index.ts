import { configureStore } from '@reduxjs/toolkit';

import betSlice from './slices/betSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

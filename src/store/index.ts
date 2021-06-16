import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from './slices/userReducer';
import betReducer from './slices/betReducer';
import gameReducer from './slices/gameReducer';

const store = configureStore({
  reducer: { user: userReducer, bet: betReducer, game: gameReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

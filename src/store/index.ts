import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from './slices/userReducer';
import betReducer from './slices/betReducer';

type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: { user: userReducer, bet: betReducer },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

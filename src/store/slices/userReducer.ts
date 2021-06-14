import { createSlice } from '@reduxjs/toolkit';

const USERS = [
  { email: 'igorsantana@gmail.com', password: 'igorigor' },
  { email: 'vitorsantos@gmail.com', password: 'vitorvitor' },
  { email: 'isabelarocha@gmail.com', password: 'isaisa' },
];

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
  },
  reducers: {
    logIn: state => {
      state.isLogged = true;
    },
    logOut: state => {
      state.isLogged = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

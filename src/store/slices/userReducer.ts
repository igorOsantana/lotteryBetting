import { createSlice } from '@reduxjs/toolkit';

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

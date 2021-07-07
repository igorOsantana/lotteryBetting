import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { isAuthenticated, setToken } from '../../services/auth';
import api from '../../services/api';

export interface CredencialProps {
  email: string;
  password: string;
}

const initialState = {
  isLogged: isAuthenticated(),
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
    },
    removeLoading: state => {
      state.isLoading = false;
    },
    signIn: state => {
      state.isLogged = true;
    },
    signOut: state => {
      state.isLogged = false;
    },
  },
});

export const { setLoading, removeLoading, signIn, signOut } = userSlice.actions;

export default userSlice.reducer;

export const authUser = (values: CredencialProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    try {
      const response = await api.post('/sessions', values);
      setToken(response.data.token);
      dispatch(signIn());
    } catch (error) {
      console.log(error.message);
    }
    dispatch(removeLoading());
  };
};

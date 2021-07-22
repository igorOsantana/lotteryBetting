import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { setToken } from '../../services/auth';
import api from '../../services/api';

export type CredencialProps = {
  email: string;
  password: string;
};

type InitialProps = {
  isLogged: boolean;
  isLoading: boolean;
  msgError: string | null;
};

const initialState: InitialProps = {
  isLogged: false,
  isLoading: false,
  msgError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: state => {
      state.isLogged = true;
    },
    signOut: state => {
      state.isLogged = false;
    },
    setMessageError: (state, { payload }: PayloadAction<string>) => {
      state.msgError = payload;
    },
    removeMessageError: state => {
      state.msgError = null;
    },
    setLoading: state => {
      state.isLoading = true;
    },
    removeLoading: state => {
      state.isLoading = false;
    },
  },
});

export const authUser = (values: CredencialProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(removeMessageError());
    dispatch(setLoading());
    try {
      const response = await api.post('/sessions', values);
      await setToken(response.data.token);
      dispatch(signIn());
    } catch (error) {
      if (error.message === 'Request failed with status code 401')
        dispatch(setMessageError('Email ou senha incorretos'));
    }
    dispatch(removeLoading());
  };
};

export const createUser = (values: CredencialProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(removeMessageError());
    dispatch(setLoading());
    try {
      await api.post('/users', values);
    } catch (error) {
      dispatch(setMessageError(error.message));
    }
    dispatch(removeLoading());
  };
};

export const {
  signIn,
  signOut,
  setMessageError,
  removeMessageError,
  setLoading,
  removeLoading,
} = userSlice.actions;

export default userSlice.reducer;

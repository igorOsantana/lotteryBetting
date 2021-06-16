import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const USERS = [
  { email: 'igorsantana@gmail.com', password: 'igorigor' },
  { email: 'vitorsantos@gmail.com', password: 'vitorvitor' },
  { email: 'isabelarocha@gmail.com', password: 'isaisa' },
];

export interface AuthProps {
  email: string;
  password: string;
}

interface UserSliceProps {
  isLogged: boolean;
  credencials: AuthProps[];
}

const initialState: UserSliceProps = {
  isLogged: false,
  credencials: USERS,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }: PayloadAction<AuthProps>) => {
      const account = USERS.filter(user => user.email === payload.email);
      if (account[0].password === payload.password) state.isLogged = true;
    },
    logOut: state => {
      state.isLogged = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;

import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

import { showNotificationError } from '../../notifications';

const USERS = [
  { email: 'igorsantana@gmail.com', password: 'igorigor' },
  { email: 'vitorsantos@gmail.com', password: 'vitorvitor' },
  { email: 'isabelarocha@gmail.com', password: 'isaisa' },
];

export interface CredencialProps {
  email: string;
  password: string;
}

export interface AuthProps {
  isLogged: boolean;
  credencials: CredencialProps[];
  signIn: (values: CredencialProps) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthProps);

const AuthContextProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  toast.configure();

  const authenticateUser = (values: CredencialProps) => {
    const account = USERS.filter(user => user.email === values.email);
    if (account.length > 0 && account[0].password === values.password)
      setIsAuth(true);
    else showNotificationError('Email ou senha inválidos.');
  };

  const signOutUser = () => setIsAuth(false);

  const valuesContext: AuthProps = {
    isLogged: isAuth,
    credencials: USERS,
    signIn: authenticateUser,
    signOut: signOutUser,
  };

  return (
    <AuthContext.Provider value={valuesContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

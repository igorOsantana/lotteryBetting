import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider, { AuthContext } from './context/Auth/AuthContext';
import GlobalStyle, { colors } from './GlobalStyled';
import store from './store/index';
import 'react-toastify/dist/ReactToastify.css';

//PAGES
import HomePage from './pages/HomePage';
import NewBetPage from './pages/NewBetPage';
import SignInPage from './pages/SignPage';
import AccountPage from './pages/AccountPage';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? <Route {...props} /> : <Redirect to='/sign' />;
};

const App: React.FC = () => {
  return (
    <Switch>
      <Provider store={store}>
        <ThemeProvider theme={colors}>
          <AuthContextProvider>
            <GlobalStyle />
            <Route path='/sign' component={SignInPage} />
            <PrivateRoute exact path='/' component={HomePage} />
            <PrivateRoute exact path='/account' component={AccountPage} />
            <PrivateRoute exact path='/new-bet' component={NewBetPage} />
          </AuthContextProvider>
        </ThemeProvider>
      </Provider>
    </Switch>
  );
};

export default App;

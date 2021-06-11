import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { colors } from './styles/GlobalStyled';
import store from './store/index';

//PAGES
import HomePage from './pages/Home';
import NewBetPage from './pages/NewBet';
import SignInPage from './pages/SignIn';

const App: React.FC = () => {
  return (
    <Switch>
      <Provider store={store}>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <Route path='/sign' component={SignInPage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/new-bet' component={NewBetPage} />
        </ThemeProvider>
      </Provider>
    </Switch>
  );
};

export default App;

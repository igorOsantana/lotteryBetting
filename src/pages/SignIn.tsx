import { Route } from 'react-router-dom';
import Authentication from '../components/SignIn/Authentication';
import LogoBrand from '../components/SignIn/LogoBrand';
import Registration from '../components/SignIn/Registration';
import ForgetPassword from '../components/SignIn/ForgetPassword';
import {
  Container,
  SectionLogo,
  SectionForm,
} from '../styles/pages/SignInStyled';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <SectionLogo>
        <LogoBrand />
      </SectionLogo>
      <SectionForm>
        <Route exact path='/sign'>
          <Authentication />
        </Route>
        <Route exact path='/sign/registration'>
          <Registration />
        </Route>
        <Route exact path='/sign/reset-password'>
          <ForgetPassword />
        </Route>
      </SectionForm>
    </Container>
  );
};

export default SignInPage;

import { Route } from 'react-router-dom';

import Authentication from '../components/SignIn/Authentication';
import LogoBrand from '../components/SignIn/LogoBrand';
import Registration from '../components/SignIn/Registration';
import ForgetPassword from '../components/SignIn/ForgetPassword';
import {
  Container,
  LeftSection,
  RightSection,
} from '../styles/pages/SignPageStyled';
import Footer from '../components/UI/Footer/Footer';

const SignInPage: React.FC = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <LogoBrand />
        </LeftSection>
        <RightSection>
          <Route exact path='/sign'>
            <Authentication />
          </Route>
          <Route exact path='/sign/registration'>
            <Registration />
          </Route>
          <Route exact path='/sign/reset-password'>
            <ForgetPassword />
          </Route>
        </RightSection>
      </Container>
      <Footer />
    </>
  );
};

export default SignInPage;

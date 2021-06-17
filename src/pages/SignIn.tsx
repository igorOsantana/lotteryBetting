import { Route } from 'react-router-dom';

import Authentication from '../components/SignIn/Authentication';
import LogoBrand from '../components/SignIn/LogoBrand';
import Registration from '../components/SignIn/Registration';
import ForgetPassword from '../components/SignIn/ForgetPassword';
import {
  Container,
  LeftSection,
  RightSection,
} from '../styles/pages/LayoutPagesStyled';

const SignInPage: React.FC = () => {
  return (
    <Container page='sign'>
      <LeftSection page='sign'>
        <LogoBrand />
      </LeftSection>
      <RightSection page='sign'>
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
  );
};

export default SignInPage;

import { Link } from 'react-router-dom';

import Button from '../UI/Button/ButtonArrow';
import { Container, Form } from '../../styles/components/SignIn/LayoutStyled';

const Authentication: React.FC = () => {
  return (
    <Container>
      <h1>Authentication</h1>
      <Form>
        <input type='email' placeholder='Email' autoFocus={true} />
        <input type='password' placeholder='Password' />
        <Link to='/sign/reset-password'>I forget my password</Link>
        <Button arrow='right'>Log In</Button>
      </Form>
      <Button color={'gray'} arrow='right'>
        <Link to='/sign/registration'>Sign Up</Link>
      </Button>
    </Container>
  );
};

export default Authentication;

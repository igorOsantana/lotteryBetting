import { Link } from 'react-router-dom';
import Button from '../UI/Button/ButtonArrow';
import { Container, Form } from '../../styles/components/SignIn/LayoutStyled';

const ForgetPassword: React.FC = () => {
  return (
    <Container>
      <h1>Reset Password</h1>
      <Form>
        <input type='email' placeholder='Email' autoFocus={true} />
        <Button arrow='right'>Send link</Button>
      </Form>
      <Button color={'gray'} arrow='left'>
        <Link to='/sign'>Back</Link>
      </Button>
    </Container>
  );
};

export default ForgetPassword;

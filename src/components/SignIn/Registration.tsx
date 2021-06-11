import { Link } from 'react-router-dom';
import Button from '../UI/Button/ButtonArrow';
import { Container, Form } from '../../styles/components/SignIn/LayoutStyled';

const Registration: React.FC = () => {
  return (
    <Container>
      <h1>Registration</h1>
      <Form>
        <input type='text' placeholder='Name' autoFocus={true} />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <Button arrow='right'>Register</Button>
      </Form>
      <Button color={'gray'} arrow='left'>
        <Link to='/sign'>Back</Link>
      </Button>
    </Container>
  );
};

export default Registration;

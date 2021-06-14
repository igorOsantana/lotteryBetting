import { Link } from 'react-router-dom';
import Button from '../UI/Button/ButtonArrow';
import {
  Container,
  ContentForm,
} from '../../styles/components/SignIn/LayoutStyled';

const ForgetPassword: React.FC = () => {
  return (
    <Container>
      <h1>Reset Password</h1>
      <ContentForm>
        <input type='email' placeholder='Email' autoFocus={true} />
        <Button arrow='right'>Send link</Button>
      </ContentForm>
      <Button color={'gray'} arrow='left'>
        <Link to='/sign'>Back</Link>
      </Button>
    </Container>
  );
};

export default ForgetPassword;

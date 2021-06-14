import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../UI/Button/ButtonArrow';
import {
  Container,
  ContentForm,
} from '../../styles/components/SignIn/LayoutStyled';
import InputWithValidation from '../UI/Input/InputWithValidation';

interface AuthProps {
  email: string;
  password: string;
}

const Authentication: React.FC = () => {
  const INITIAL_VALUES: AuthProps = { email: '', password: '' };
  const validationYup = Yup.object({
    email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
  });

  const submitHandler = (
    values: AuthProps,
    { setSubmitting }: FormikHelpers<AuthProps>
  ) => {
    const { email, password } = values;
    alert(`email = ${email}\n senha = ${password}`);
    setSubmitting(false);
  };

  return (
    <Container>
      <h1>Authentication</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationYup}
        onSubmit={submitHandler}
      >
        <Form>
          <ContentForm>
            <InputWithValidation
              name='email'
              type='text'
              placeholder='Email'
              autoFocus={true}
            />
            <InputWithValidation
              name='password'
              type='password'
              placeholder='Password'
            />
            <Link to='/sign/reset-password'>I forget my password</Link>
            <Button isSubmit={true} arrow='right'>
              Log In
            </Button>
          </ContentForm>
        </Form>
      </Formik>
      <Button color={'gray'} arrow='right'>
        <Link to='/sign/registration'>Sign Up</Link>
      </Button>
    </Container>
  );
};

export default Authentication;

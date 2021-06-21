import { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import {
  AuthContext,
  CredencialProps,
} from '../../../context/Auth/AuthContext';
import Button from '../../UI/Button/ButtonArrow';
import InputWithValidation from '../../UI/Input/InputWithValidation';
import { Container, ContentForm } from '../LayoutStyled';

export const validationYup = Yup.object({
  email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
});

const Authentication: React.FC = () => {
  const INITIAL_VALUES: CredencialProps = { email: '', password: '' };
  const { isLogged, signIn } = useContext(AuthContext);

  const submitHandler = (
    values: CredencialProps,
    { setSubmitting }: FormikHelpers<CredencialProps>
  ) => {
    signIn(values);
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
            <InputWithValidation name='email' type='text' placeholder='Email' />
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
      {isLogged && <Redirect to='/' />}
    </Container>
  );
};

export default Authentication;

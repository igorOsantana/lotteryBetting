import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useAppDispatch, RootState } from '../../store';
import { logIn, AuthProps } from '../../store/slices/userReducer';
import Button from '../UI/Button/ButtonArrow';
import InputWithValidation from '../UI/Input/InputWithValidation';
import {
  Container,
  ContentForm,
} from '../../styles/components/SignIn/LayoutStyled';

export const validationYup = Yup.object({
  email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
});

const Authentication: React.FC = () => {
  const INITIAL_VALUES: AuthProps = { email: '', password: '' };
  const dispatch = useAppDispatch();
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  const submitHandler = (
    values: AuthProps,
    { setSubmitting }: FormikHelpers<AuthProps>
  ) => {
    dispatch(logIn(values));
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

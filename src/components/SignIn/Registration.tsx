import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

import { validationYup } from './Authentication';
import InputWithValidation from '../UI/Input/InputWithValidation';
import Button from '../UI/Button/ButtonArrow';
import {
  Container,
  ContentForm,
} from '../../styles/components/SignIn/LayoutStyled';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const INITIAL_VALUES: RegisterProps = { name: '', email: '', password: '' };

  const submitHandler = (
    values: RegisterProps,
    { setSubmitting }: FormikHelpers<RegisterProps>
  ) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  };
  return (
    <Container>
      <h1>Registration</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationYup}
        onSubmit={submitHandler}
      >
        <Form>
          <ContentForm>
            <InputWithValidation name='text' type='text' placeholder='Name' />
            <InputWithValidation name='email' type='text' placeholder='Email' />
            <InputWithValidation
              name='password'
              type='password'
              placeholder='Password'
            />
            <Button isSubmit={true} arrow='right'>
              Register
            </Button>
          </ContentForm>
        </Form>
      </Formik>
      <Button color={'gray'} arrow='left'>
        <Link to='/sign'>Back</Link>
      </Button>
    </Container>
  );
};

export default Registration;

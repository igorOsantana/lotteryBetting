import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

import { validationYup } from './Authentication';
import InputWithValidation from '../UI/Input/InputWithValidation';
import Button from '../UI/Button/ButtonArrow';
import {
  Container,
  ContentForm,
} from '../../styles/components/SignIn/LayoutStyled';

interface ForgetPasswordProps {
  email: string;
}

const ForgetPassword: React.FC = () => {
  const INITIAL_VALUES: ForgetPasswordProps = { email: '' };

  const submitHandler = (
    values: ForgetPasswordProps,
    { setSubmitting }: FormikHelpers<ForgetPasswordProps>
  ) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  };
  return (
    <Container>
      <h1>Reset Password</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationYup}
        onSubmit={submitHandler}
      >
        <Form>
          <ContentForm>
            <InputWithValidation name='email' type='text' placeholder='Email' />
            <Button isSubmit={true} arrow='right'>
              Send link
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

export default ForgetPassword;

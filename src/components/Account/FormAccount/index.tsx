import { Formik, Form, FormikHelpers } from 'formik';

import { INITIAL_VALUES, RegisterProps } from '../../Sign/Registration';
import { validationYup } from '../../Sign/Authentication';
import InputWithValidation from '../../UI/Input/InputWithValidation';
import Button from '../../UI/Button/ButtonArrow';

import { ContentForm } from './FormAccountStyled';

const FormAccount: React.FC = () => {
  const submitHandler = (
    values: RegisterProps,
    { setSubmitting }: FormikHelpers<RegisterProps>
  ) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationYup}
      onSubmit={submitHandler}
    >
      <Form>
        <ContentForm>
          <InputWithValidation name='name' type='text' placeholder='New name' />
          <InputWithValidation
            name='email'
            type='text'
            placeholder='New email'
          />
          <InputWithValidation
            name='password'
            type='password'
            placeholder='New password'
          />
          <InputWithValidation
            name='ConfirmPassword'
            type='password'
            placeholder='Confirm new password'
          />
          <Button isSubmit={true} arrow='right' fontSize='1.5rem'>
            Update
          </Button>
        </ContentForm>
      </Form>
    </Formik>
  );
};

export default FormAccount;

import { Field, ErrorMessage, useField } from 'formik';
import { InputContainer } from '../../../styles/components/UI/Input/InputWithValidationStyled';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const InputWithValidation: React.FC<InputProps> = (props) => {
  const [, meta] = useField(props);

  return (
    <InputContainer hasError={!!meta.error && meta.touched}>
      <Field {...props} />
      <ErrorMessage component='span' name={props.name} />
    </InputContainer>
  );
};

export default InputWithValidation;

import { Button } from '../../../styles/components/UI/Button/ButtonFilterStyled';

interface Props {
  onClick?: () => void;
  color?: string;
}

const ButtonFilter: React.FC<Props> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonFilter;

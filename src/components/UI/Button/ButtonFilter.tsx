import { Button } from '../../../styles/components/UI/Button/ButtonFilterStyled';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  selected?: boolean;
}

const ButtonFilter: React.FC<Props> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonFilter;

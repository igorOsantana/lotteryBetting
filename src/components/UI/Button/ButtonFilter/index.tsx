import { Button } from './ButtonFilterStyled';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  selected?: boolean;
}

const ButtonFilter: React.FC<Props> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonFilter;

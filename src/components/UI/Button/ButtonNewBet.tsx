import { Button } from '../../../styles/components/UI/Button/ButtonNewBetStyled';

interface ButtonNewBetProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
}

const ButtonNewBet: React.FC<ButtonNewBetProps> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonNewBet;

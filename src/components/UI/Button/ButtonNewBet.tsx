import { Button } from '../../../styles/components/UI/Button/ButtonNewBetStyled';

interface ButtonNewBetProps {
  color?: string;
}

const ButtonNewBet: React.FC<ButtonNewBetProps> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonNewBet;

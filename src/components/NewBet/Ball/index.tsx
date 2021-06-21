import { Button } from './BallStyled';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Ball: React.FC<ButtonProps> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default Ball;

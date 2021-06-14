import { Button } from '../../styles/components/NewBet/BallStyled';

const Ball: React.FC = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default Ball;

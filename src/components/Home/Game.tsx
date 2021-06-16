import {
  Container,
  Content,
  BorderColor,
} from '../../styles/components/Home/GameStyled';

interface GameProps {
  type: string;
  numbers: number[];
  date: string;
  price: number;
  color: string;
}

const Game: React.FC<GameProps> = props => {
  const convertToBRL = (num: number) =>
    num.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <Container>
      <BorderColor color={props.color} />
      <Content color={props.color}>
        <div>{props.numbers.join(', ')}</div>
        <div>
          {props.date} - ({convertToBRL(props.price)})
        </div>
        <div>{props.type}</div>
      </Content>
    </Container>
  );
};

export default Game;

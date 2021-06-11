import {
  Container,
  Content,
  BorderColor,
} from '../../styles/components/Home/GameStyled';

const Game: React.FC = () => {
  const numbers = [1, 4, 6, 8, 21, 43, 55, 72, 78, 85, 90].join(', ');
  const date = '30/10/2021';
  const price = 'R$ 2,50';
  return (
    <Container>
      <BorderColor />
      <Content>
        <div>{numbers}</div>
        <div>
          {date} - ({price})
        </div>
        <div>Lotofácil</div>
      </Content>
    </Container>
  );
};

export default Game;

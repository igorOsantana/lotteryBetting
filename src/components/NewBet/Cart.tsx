import Button from '../UI/Button/ButtonArrow';
import Game from '../Home/Game';
import {
  Container,
  Title,
  Content,
  TotalPrice,
  ButtoSaveContainer,
} from '../../styles/components/NewBet/CartStyled';

const Cart: React.FC = () => {
  return (
    <>
      <Container>
        <Title>CART</Title>
        <Content>
          <Game />
        </Content>
        <TotalPrice>CARTTOTAL: R$7,00</TotalPrice>
      </Container>
      <ButtoSaveContainer>
        <Button arrow='right'>Save</Button>
      </ButtoSaveContainer>
    </>
  );
};

export default Cart;

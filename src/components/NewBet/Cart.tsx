import Button from '../UI/Button/ButtonArrow';
import Item from '../NewBet/CartItem';
import {
  Container,
  Title,
  Content,
  TotalPrice,
  ButtoSaveContainer,
} from '../../styles/components/NewBet/CartStyled';

const Cart: React.FC = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 10, 23, 56, 78, 41, 57, 79, 34, 12, 56,
  ].join(', ');
  return (
    <>
      <Container>
        <Title>CART</Title>
        <Content>
          <Item
            color='purple'
            numbers={numbers}
            game='Lotofácil'
            price='R$3,00'
          />
          <Item
            color='green'
            numbers={numbers}
            game='Lotomania'
            price='R$5,50'
          />
          <Item color='red' numbers={numbers} game='Quina' price='R$2,50' />
          <Item color='blue' numbers={numbers} game='Federal' price='R$4,00' />
        </Content>
        <TotalPrice>
          <span>CART</span>
          <p>TOTAL: R$7,00</p>
        </TotalPrice>
      </Container>
      <ButtoSaveContainer>
        <Button arrow='right'>Save</Button>
      </ButtoSaveContainer>
    </>
  );
};

export default Cart;

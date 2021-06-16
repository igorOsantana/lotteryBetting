import Button from '../UI/Button/ButtonArrow';
import Item from '../NewBet/CartItem';
import {
  Container,
  Title,
  Content,
  TotalPrice,
  ButtoSaveContainer,
} from '../../styles/components/NewBet/CartStyled';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { saveBet } from '../../store/slices/betReducer';

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.bet.cartBets);
  const totalPrice = useSelector((state: RootState) => state.bet.totalPrice);
  const { color } = useSelector((state: RootState) => state.game.game);
  const dispatch = useAppDispatch();
  let contentCart;

  const saveBetHandler = () => {
    dispatch(saveBet(items));
  };

  const convertToBRL = (num: number) =>
    num.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  if (items.length === 0) {
    contentCart = <p>Empty cart</p>;
  } else {
    contentCart = items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        color={item.color}
        numbers={item.balls.join(', ')}
        game={item.type}
        price={item.price}
        date={item.date}
        convert={convertToBRL}
      />
    ));
  }

  return (
    <>
      <Container>
        <Title>CART</Title>
        <Content>{contentCart}</Content>
        <TotalPrice>
          <span>CART</span>
          <p>TOTAL: {convertToBRL(totalPrice)}</p>
        </TotalPrice>
      </Container>
      <ButtoSaveContainer>
        <Button onClick={saveBetHandler} color={color} arrow='right'>
          Save
        </Button>
      </ButtoSaveContainer>
    </>
  );
};

export default Cart;

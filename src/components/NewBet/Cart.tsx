import { useContext } from 'react';
import { useAppDispatch } from '../../store';
import { saveBet } from '../../store/slices/betReducer';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/Cart/CartContext';

import {
  showNotificationSucess,
  showNotificationError,
} from '../../notifications';
import Button from '../UI/Button/ButtonArrow';
import Item from '../NewBet/CartItem';
import {
  Container,
  Title,
  Content,
  TotalPrice,
  ButtoSaveContainer,
} from '../../styles/components/NewBet/CartStyled';
import { useHistory } from 'react-router-dom';

const Cart: React.FC = () => {
  const { bets, totalPrice, game } = useContext(CartContext);
  const { color } = game;

  toast.configure();
  const dispatch = useAppDispatch();
  const history = useHistory();

  let contentCart;

  const cartIsEmpty = bets.length === 0;

  const saveBetHandler = () => {
    let notificationSuccess =
      bets.length === 1 ? 'Aposta adicionada.' : 'Apostas adicionadas.';
    let notificationError =
      'Para salvar suas apostas, o valor miníno é de R$30,00.';
    if (totalPrice >= 30) {
      dispatch(saveBet(bets));
      showNotificationSucess(notificationSuccess);
      setTimeout(() => history.push('/'), 1000);
    } else if (totalPrice < 30) showNotificationError(notificationError);
  };

  const convertToBRL = (num: number) =>
    num.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  if (cartIsEmpty) {
    contentCart = <p>Empty cart</p>;
  } else {
    contentCart = bets.map(item => (
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
        {!cartIsEmpty && (
          <TotalPrice>
            <span>CART</span>
            <p>TOTAL: {convertToBRL(totalPrice)}</p>
          </TotalPrice>
        )}
      </Container>
      <ButtoSaveContainer>
        <Button
          disabled={cartIsEmpty}
          onClick={saveBetHandler}
          color={color}
          arrow='right'
        >
          Save
        </Button>
      </ButtoSaveContainer>
    </>
  );
};

export default Cart;

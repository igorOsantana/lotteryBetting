import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useAppDispatch } from '../../store';
import { removeBet } from '../../store/slices/betReducer';
import {
  Container,
  DataInfo,
  ButtonDelete,
  Numbers,
  GameAndPrice,
} from '../../styles/components/NewBet/CartItemStyled';

interface CartItemProps {
  id: number;
  color: string;
  numbers: string;
  game: string;
  price: number;
  date: string;
  convert: (num: number) => string;
}

const CartItem: React.FC<CartItemProps> = props => {
  const dispatch = useAppDispatch();

  const removeItemCartHandler = () => {
    dispatch(removeBet({ id: props.id, price: props.price }));
  };

  return (
    <Container>
      <ButtonDelete onClick={removeItemCartHandler}>
        <DeleteForeverIcon />
      </ButtonDelete>
      <DataInfo color={props.color}>
        <Numbers>{props.numbers}</Numbers>
        <GameAndPrice color={props.color}>
          {props.game}
          <span>{props.convert(props.price)}</span>
        </GameAndPrice>
      </DataInfo>
    </Container>
  );
};

export default CartItem;

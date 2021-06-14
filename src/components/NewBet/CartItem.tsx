import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
  Container,
  DataInfo,
  ButtonDelete,
  Numbers,
  GameAndPrice,
} from '../../styles/components/NewBet/CartItemStyled';

interface CartItemProps {
  color: string;
  numbers: string;
  game: string;
  price: string;
}

const CartItem: React.FC<CartItemProps> = props => {
  return (
    <Container>
      <ButtonDelete>
        <DeleteForeverIcon />
      </ButtonDelete>
      <DataInfo color={props.color}>
        <Numbers>{props.numbers}</Numbers>
        <GameAndPrice color={props.color}>
          {props.game}
          <span>{props.price}</span>
        </GameAndPrice>
      </DataInfo>
    </Container>
  );
};

export default CartItem;

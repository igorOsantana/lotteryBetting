import { useContext, useState } from 'react';
import { CartContext } from '../../context/Cart/CartContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ModalConfirm, {
  ModalConfirmContentProps,
} from '../../components/UI/Modal/ModalConfirm';
import {
  Container,
  DataInfo,
  ButtonDelete,
  Numbers,
  GameAndPrice,
} from '../../styles/components/NewBet/CartItemStyled';
import { useEffect } from 'react';

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
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { removeBetById } = useContext(CartContext);

  const contentModalDelete: ModalConfirmContentProps = {
    header: 'Delete bet',
    body: 'Do you want to delete the bet?',
    color: '#f00',
    actionButton: 'Delete',
    show: showModalDelete,
    setShow: setShowModalDelete,
    setConfirm: setConfirmDelete,
  };

  const removeItemCartHandler = () => setShowModalDelete(true);

  useEffect(() => {
    confirmDelete && removeBetById(props.id, props.price);
  }, [confirmDelete, removeBetById, props.id, props.price]);

  return (
    <>
      {showModalDelete && <ModalConfirm content={contentModalDelete} />}
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
    </>
  );
};

export default CartItem;

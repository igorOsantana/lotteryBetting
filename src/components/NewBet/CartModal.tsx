import { Dispatch, SetStateAction, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  Header,
  Body,
  Footer,
  Button,
} from '../../styles/components/NewBet/CartModalStyled';
import { Backdrop } from '../../styles/components/UI/Modal/BackdropModal';

export interface ModalProps {
  color: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

interface CartModalProps {
  content: ModalProps;
}

const CartModal: React.FC<CartModalProps> = ({ content, children }) => {
  const closeModalHandler = () => {
    content.setConfirm(false);
    content.setShow(false);
    document.body.style.overflowY = 'auto';
  };

  const saveCartHandler = () => {
    content.setConfirm(true);
    content.setShow(false);
    document.body.style.overflowY = 'auto';
  };

  useEffect(() => {
    if (content.show) document.body.style.overflowY = 'hidden';
  }, [content.show]);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModalHandler} />,
        document.getElementById('backdrop-root') as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <Container show={content.show}>
          <Header>
            <h1>CART</h1>
          </Header>
          <Body>{children}</Body>
          <Footer>
            <Button onClick={closeModalHandler}>Cancel</Button>
            <Button onClick={saveCartHandler} color={content.color}>
              Save
            </Button>
          </Footer>
        </Container>,
        document.getElementById('modal-root') as HTMLDivElement
      )}
    </>
  );
};

export default CartModal;

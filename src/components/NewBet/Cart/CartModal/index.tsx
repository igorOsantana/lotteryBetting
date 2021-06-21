import { Dispatch, SetStateAction, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Backdrop,
  Container,
  Header,
  Body,
  Footer,
  Button,
} from './CartModalStyled';

export interface ModalProps {
  color: string;
  show: boolean;
  empty: boolean;
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
        <Container>
          <Header>
            <h1>CART</h1>
          </Header>
          <Body>{children}</Body>
          <Footer>
            <Button onClick={closeModalHandler}>Back</Button>
            {content.empty === false && (
              <Button onClick={saveCartHandler} color={content.color}>
                Save
              </Button>
            )}
          </Footer>
        </Container>,
        document.getElementById('modal-root') as HTMLDivElement
      )}
    </>
  );
};

export default CartModal;

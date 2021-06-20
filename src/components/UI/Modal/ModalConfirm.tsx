import { useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';

import {
  Backdrop,
  Container,
  Header,
  Body,
  Footer,
  Button,
} from '../../../styles/components/UI/Modal/ModalConfirmStyled';

export interface ModalConfirmContentProps {
  header: string;
  body: string;
  color: string;
  actionButton: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

interface ModalProps {
  content: ModalConfirmContentProps;
}

const ModalConfirm: React.FC<ModalProps> = ({ content }) => {
  const closeModalHandler = () => {
    content.setConfirm(false);
    content.setShow(false);
    document.body.style.overflowY = 'auto';
  };

  const confirmModalHandler = () => {
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
            <h1>{content.header}</h1>
          </Header>
          <Body>{content.body}</Body>
          <Footer>
            <Button onClick={closeModalHandler}>Cancel</Button>
            <Button onClick={confirmModalHandler} color={content.color}>
              {content.actionButton}
            </Button>
          </Footer>
        </Container>,
        document.getElementById('modal-root') as HTMLDivElement
      )}
    </>
  );
};

export default ModalConfirm;

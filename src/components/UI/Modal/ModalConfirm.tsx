import { PinDropSharp } from '@material-ui/icons';
import { Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';

import { Backdrop } from '../../../styles/components/UI/Modal/BackdropModal';
import {
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
  };

  const confirmModalHandler = () => {
    content.setConfirm(true);
    content.setShow(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModalHandler} />,
        document.getElementById('backdrop-root') as HTMLDivElement
      )}
      <Container show={content.show}>
        <Header>
          <h2>{content.header}</h2>
        </Header>
        <Body>{content.body}</Body>
        <Footer>
          <Button onClick={closeModalHandler}>Cancelar</Button>
          <Button onClick={confirmModalHandler} color={content.color}>
            {content.actionButton}
          </Button>
        </Footer>
      </Container>
    </>
  );
};

export default ModalConfirm;

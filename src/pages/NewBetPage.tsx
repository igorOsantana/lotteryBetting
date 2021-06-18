import { useState } from 'react';
import CartContextProvider from '../context/Cart/CartContext';
import Navbar from '../components/UI/Navbar/Navbar';
import Cart from '../components/NewBet/Cart';
import NewBet from '../components/NewBet/NewBet';
import ModalConfirm, {
  ModalConfirmContentProps,
} from '../components/UI/Modal/ModalConfirm';
import Footer from '../components/UI/Footer/Footer';
import {
  Container,
  LeftSection,
  RightSection,
} from '../styles/pages/NewBetPageStyled';

const NewBetPage: React.FC = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const contentModalDelete: ModalConfirmContentProps = {
    header: 'Excluir aposta',
    body: 'Deseja excluir a aposta?',
    color: '#f00',
    actionButton: 'Excluir',
    show: showModalDelete,
    setShow: setShowModalDelete,
    setConfirm: setConfirmDelete,
  };

  return (
    <CartContextProvider>
      {showModalDelete && <ModalConfirm content={contentModalDelete} />}
      <Navbar>
        <Container>
          <LeftSection>
            <NewBet />
          </LeftSection>
          <RightSection>
            <Cart
              onDeleteBet={setShowModalDelete}
              confirmDelete={confirmDelete}
            />
          </RightSection>
        </Container>
      </Navbar>
      <Footer />
    </CartContextProvider>
  );
};

export default NewBetPage;

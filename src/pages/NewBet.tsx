import CartContextProvider from '../context/Cart/CartContext';
import Navbar from '../components/UI/Navbar/Navbar';
import Cart from '../components/NewBet/Cart';
import NewBet from '../components/NewBet/NewBet';
import {
  Container,
  LeftSection,
  RightSection,
} from '../styles/pages/LayoutPagesStyled';

const NewBetPage: React.FC = () => {
  return (
    <CartContextProvider>
      <Navbar>
        <Container>
          <LeftSection>
            <NewBet />
          </LeftSection>
          <RightSection>
            <Cart />
          </RightSection>
        </Container>
      </Navbar>
    </CartContextProvider>
  );
};

export default NewBetPage;

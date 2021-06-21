import CartContextProvider from '../../context/Cart/CartContext';
import Navbar from '../../components/UI/Navbar/Navbar';
import Cart from '../../components/NewBet/Cart';
import NewBet from '../../components/NewBet/NewBet';
import Footer from '../../components/UI/Footer/Footer';
import { Container, LeftSection, RightSection } from './NewBetPageStyled';

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
      <Footer />
    </CartContextProvider>
  );
};

export default NewBetPage;

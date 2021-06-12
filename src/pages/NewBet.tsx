import { Container, LeftSection, RightSection } from '../styles/pages/Layout';
import Navbar from '../components/UI/Navbar/Navbar';
import Cart from '../components/NewBet/Cart';

const NewBetPage: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <LeftSection>BALLS GAME</LeftSection>
        <RightSection>
          <Cart />
        </RightSection>
      </Container>
    </Navbar>
  );
};

export default NewBetPage;

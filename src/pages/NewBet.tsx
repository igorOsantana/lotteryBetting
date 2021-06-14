import {
  Container,
  LeftSection,
  RightSection,
} from '../styles/pages/LayoutStyled';
import Navbar from '../components/UI/Navbar/Navbar';
import Cart from '../components/NewBet/Cart';
import NewBet from '../components/NewBet/NewBet';

const NewBetPage: React.FC = () => {
  return (
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
  );
};

export default NewBetPage;

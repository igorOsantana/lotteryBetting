import Navbar from '../../components/UI/Navbar/Navbar';
import FormAccount from '../../components/Account/FormAccount';
import Footer from '../../components/UI/Footer/Footer';

import { Container } from './AccountPageStyled';

const AccountPage: React.FC = () => {
  return (
    <>
      <Navbar>
        <Container>
          <FormAccount />
        </Container>
      </Navbar>
      <Footer />
    </>
  );
};

export default AccountPage;

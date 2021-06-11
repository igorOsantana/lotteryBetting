import ButtonFilter from '../UI/Button/ButtonFilter';
import ButtonNewBet from '../UI/Button/ButtonArrow';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/components/Home/SubnavStyled';

const SubNav: React.FC = () => {
  return (
    <Container>
      <h2>RECENT GAMES</h2>
      <span>Filters</span>
      <ButtonFilter color='#7F3992'>Lotofácil</ButtonFilter>
      <ButtonFilter color='#53AC66'>Mega-Sena</ButtonFilter>
      <ButtonFilter color='#EE9B31'>Lotomania</ButtonFilter>
      <ButtonNewBet className='test' fontSize='1.25rem' arrow='right'>
        <Link to='new-bet'>New Bet</Link>
      </ButtonNewBet>
    </Container>
  );
};

export default SubNav;

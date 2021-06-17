import ButtonFilter from '../UI/Button/ButtonFilter';
import ButtonNewBet from '../UI/Button/ButtonArrow';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/components/Home/SubnavStyled';
import { Bet } from '../../store/slices/betReducer';

interface SubnavProps {
  games: Bet[];
  onFilterGame: (type: string) => void;
  typeClicked: string;
}

interface FilterProps {
  type: string;
  color: string;
  id: number;
}

const SubNav: React.FC<SubnavProps> = ({
  games,
  onFilterGame,
  typeClicked,
}) => {
  let contentFilter;
  let types: FilterProps[] = [];

  const getTypesToBeFilter = () => {
    games.forEach(game =>
      types.push({ type: game.type, color: game.color, id: game.id })
    );
    let clearDuplicateValues = new Map();
    types.forEach(type => {
      if (!clearDuplicateValues.has(type.type))
        clearDuplicateValues.set(type.type, type);
    });
    types = Array.from(clearDuplicateValues.values());
  };

  const setContentFilters = () => {
    contentFilter = types.map(type => (
      <ButtonFilter
        onClick={() => onFilterGame(type.type)}
        key={type.id}
        color={type.color}
        selected={typeClicked === type.type}
      >
        {type.type}
      </ButtonFilter>
    ));
  };

  if (games.length === 0) {
    contentFilter = null;
  } else {
    getTypesToBeFilter();
    setContentFilters();
  }

  return (
    <Container>
      <h2>RECENT GAMES</h2>
      {!!contentFilter && <span>Filters</span>}
      {contentFilter}
      <ButtonNewBet className='test' fontSize='1.25rem' arrow='right'>
        <Link to='new-bet'>New Bet</Link>
      </ButtonNewBet>
    </Container>
  );
};

export default SubNav;

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import Navbar from '../../components/UI/Navbar/Navbar';
import SubNav from '../../components/Home/SubNav';
import ContentGames from '../../components/Home/ContentGames';
import Game from '../../components/Home/Game';
import Footer from '../../components/UI/Footer/Footer';
import { Container } from './HomePageStyled';

const HomePage: React.FC = () => {
  const gamesSaved = useSelector((state: RootState) => state.bet.savedBets);
  const [contentGameFilter, setContentGameFilter] = useState<JSX.Element[]>([]);
  const [filterSelected, setFilterSelected] = useState<string>('empty');
  let contentGame;

  if (gamesSaved.length === 0) {
    contentGame = <h2>You don't have any games yet...</h2>;
  } else {
    contentGame = gamesSaved.map(game => (
      <Game
        key={game.id}
        type={game.type}
        numbers={game.balls}
        date={game.date}
        price={game.price}
        color={game.color}
      />
    ));
  }

  const filterGame = (type: string) => {
    setFilterSelected(currentType => (currentType === type ? 'empty' : type));
    const filteredGame = gamesSaved.filter(game => game.type === type);
    setContentGameFilter(
      filteredGame.map(game => (
        <Game
          key={game.id}
          type={game.type}
          numbers={game.balls}
          date={game.date}
          price={game.price}
          color={game.color}
        />
      ))
    );
  };

  return (
    <Container>
      <Navbar>
        <SubNav
          typeClicked={filterSelected}
          onFilterGame={filterGame}
          games={gamesSaved}
        />
        <ContentGames>
          {contentGameFilter.length === 0 || filterSelected === 'empty'
            ? contentGame
            : contentGameFilter}
        </ContentGames>
      </Navbar>
      <Footer />
    </Container>
  );
};

export default HomePage;

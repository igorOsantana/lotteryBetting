import Navbar from '../components/UI/Navbar/Navbar';
import SubNav from '../components/Home/SubNav';
import ContentGames from '../components/Home/ContentGames';
import Game from '../components/Home/Game';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const HomePage: React.FC = () => {
  const gamesSaved = useSelector((state: RootState) => state.bet.savedBets);
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

  return (
    <Navbar>
      <SubNav games={gamesSaved} />
      <ContentGames>{contentGame}</ContentGames>
    </Navbar>
  );
};

export default HomePage;

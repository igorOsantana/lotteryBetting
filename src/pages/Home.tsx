import Navbar from '../components/UI/Navbar/Navbar';
import SubNav from '../components/Home/SubNav';
import ContentGames from '../components/Home/ContentGames';
import Game from '../components/Home/Game';

const HomePage: React.FC = () => {
  return (
    <Navbar>
      <SubNav />
      <ContentGames>
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </ContentGames>
    </Navbar>
  );
};

export default HomePage;

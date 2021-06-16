import RULES from '../../games.json';

import { useAppDispatch, RootState } from '../../store';
import {
  selectGame,
  selectBall,
  updateBalls,
  clearBalls,
} from '../../store/slices/gameReducer';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ButtonNewBet from '../UI/Button/ButtonNewBet';
import ButtonFilter from '../UI/Button/ButtonFilter';
import Ball from './Ball';
import {
  Container,
  Title,
  Filters,
  Description,
  BallsContainer,
  ButtonsContainer,
} from '../../styles/components/NewBet/NewBetStyled';
import { useSelector } from 'react-redux';
import { Bet, setNewBet } from '../../store/slices/betReducer';

const NewBet: React.FC = () => {
  const { types } = RULES;
  const dispatch = useAppDispatch();

  const game = useSelector((state: RootState) => state.game.game);
  const ballsSelected = useSelector((state: RootState) => state.game.balls);
  const bets = useSelector((state: RootState) => state.bet.cartBets);
  let balls: JSX.Element[] = [];

  const filterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const typeClicked = event.currentTarget.innerText;
    selectGameHandler(typeClicked);
    clearBallsSelected();
  };

  const selectGameHandler = (typeClicked: string | null) => {
    const gameSelected = types.filter(game => game.type === typeClicked)[0];
    dispatch(selectGame(gameSelected));
  };

  const clearBallsSelected = () => {
    const ballsSelected = document.querySelectorAll('.selected');
    ballsSelected.forEach(ball => ball.classList.remove('selected'));
    dispatch(clearBalls());
  };

  const getNumberOfBall = (event: React.MouseEvent<HTMLButtonElement>) => {
    const ballClicked = Number(event.currentTarget.textContent);
    if (ballsSelected.some(ball => ball === ballClicked)) {
      const ballsUpdated = ballsSelected.filter(ball => ball !== ballClicked);
      dispatch(updateBalls(ballsUpdated));
      event.currentTarget.classList.toggle('selected');
    } else if (ballsSelected.length < game['max-number']) {
      dispatch(selectBall(ballClicked));
      event.currentTarget.classList.toggle('selected');
    } else {
      alert('Você atingiu o limite de números.');
    }
  };

  const completeGameHandler = () => {
    const allBalls = document.querySelectorAll('[data-js=betBall]');
    const maxNumbersCanSelect = game['max-number'];
    const difBetween = maxNumbersCanSelect - ballsSelected.length;
    const arrayRandomNumbers = getNumbersRandonly(difBetween);
    setBallRandonly(arrayRandomNumbers, allBalls);
  };

  const getNumbersRandonly = (difBetween: number) => {
    let arrayRandomNumbers: number[] = [];
    while (arrayRandomNumbers.length < difBetween) {
      let randomNum = Math.floor(Math.random() * game.range + 1);
      let hasThatRandomNumber = ballsSelected.some(ball => ball === randomNum);
      if (hasThatRandomNumber === false) arrayRandomNumbers.push(randomNum);
      let clearDuplicateNumber = new Set(arrayRandomNumbers);
      arrayRandomNumbers = Array.from(clearDuplicateNumber);
    }
    return arrayRandomNumbers;
  };

  const setBallRandonly = (
    arrayRandomNum: number[],
    allBalls: NodeListOf<Element>
  ) => {
    allBalls.forEach(ball => {
      arrayRandomNum.forEach(num => {
        if (Number(ball.textContent) === num) {
          ball.classList.add('selected');
          dispatch(selectBall(num));
        }
      });
    });
  };

  const addToCart = () => {
    const newBet = {
      id: new Date().getTime() + Math.random(),
      type: game.type,
      balls: ballsSelected,
      price: game.price,
      color: game.color,
      date: new Date().toLocaleDateString(),
    };
    if (alreadyHasThatBet(newBet) === false) {
      dispatch(setNewBet(newBet));
      clearBallsSelected();
    } else {
      alert('Você já fez uma aposta com esses dados.');
    }
  };

  const alreadyHasThatBet = (newBet: Bet) => {
    const typeBet = bets.filter(bet => bet.type === newBet.type);
    if (typeBet.length > 0) {
      return typeBet.some(
        bet =>
          bet.balls.length === newBet.balls.length &&
          bet.balls.every((element, index) => {
            return element === newBet.balls[index];
          })
      );
    }
    return false;
  };

  for (var i = 1; i <= game.range; i++) {
    balls.push(
      <Ball data-js='betBall' key={i} onClick={getNumberOfBall}>
        {('00' + i).slice(-2)}
      </Ball>
    );
  }

  return (
    <Container>
      <Title>
        NEW BET<span>FOR {game.type.toUpperCase()}</span>
      </Title>
      <Filters>
        <p>Choose a game</p>
        <div>
          {types.map(gameFilter => (
            <ButtonFilter
              key={gameFilter.type}
              onClick={filterHandler}
              color={gameFilter.color}
              selected={gameFilter.type === game.type}
            >
              {gameFilter.type}
            </ButtonFilter>
          ))}
        </div>
      </Filters>
      <Description>
        <span>Fill your bet</span>
        <p>{game.description}</p>
      </Description>
      <BallsContainer color={game.color}>{balls}</BallsContainer>
      <ButtonsContainer>
        <div>
          <ButtonNewBet color={game.color} onClick={completeGameHandler}>
            Complete game
          </ButtonNewBet>
          <ButtonNewBet color={game.color} onClick={clearBallsSelected}>
            Clear game
          </ButtonNewBet>
        </div>
        <ButtonNewBet color={game.color} onClick={addToCart}>
          <ShoppingCartOutlinedIcon />
          &nbsp;Add to cart
        </ButtonNewBet>
      </ButtonsContainer>
    </Container>
  );
};

export default NewBet;

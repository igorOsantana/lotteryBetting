import { useContext, useState, useCallback, useEffect } from 'react';
import RULES from '../../games.json';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import ModalConfirm from '../../components/UI/Modal/ModalConfirm';
import { Bet, CartContext } from '../../context/Cart/CartContext';
import { showNotificationError } from '../../notifications';
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

const NewBet: React.FC = () => {
  const [newBetState, setNewBetState] = useState<Bet>();
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);
  let balls: JSX.Element[] = [];
  const { types } = RULES;
  const {
    game,
    selectedBalls,
    bets,
    selectGame,
    selectBall,
    clearBalls,
    updateBalls,
    addNewBet,
  } = useContext(CartContext);

  const textsNotification = {
    maxNum: `Esse jogo aceita apenas ${game['max-number']} números.`,
    sameNums: 'Você já fez uma aposta com esses números.',
    notEnoughNum: `Adicione mais números. Você selecionou ${selectedBalls.length} em um total de ${game['max-number']}.`,
  };

  const contentModalAdd = {
    header: 'Add a new bet',
    body: 'Do you want to add the bet?',
    color: '#3E8914',
    actionButton: 'Add',
    show: showModalAdd,
    setShow: setShowModalAdd,
    setConfirm: setConfirmAdd,
  };

  const filterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const typeClicked = event.currentTarget.innerText;
    selectGameHandler(typeClicked);
    clearBallsSelected();
  };

  const selectGameHandler = (typeClicked: string) => {
    const gameSelected = types.filter(game => game.type === typeClicked)[0];
    selectGame(gameSelected);
  };

  const clearBallsSelected = useCallback(() => {
    const ballsSelected = document.querySelectorAll('.selected');
    ballsSelected.forEach(ball => ball.classList.remove('selected'));
    clearBalls();
  }, [clearBalls]);

  const getNumberOfBall = (event: React.MouseEvent<HTMLButtonElement>) => {
    const ballClicked = Number(event.currentTarget.textContent);
    if (selectedBalls.some(ball => ball === ballClicked)) {
      const ballsUpdated = selectedBalls.filter(ball => ball !== ballClicked);
      updateBalls(ballsUpdated);
      event.currentTarget.classList.toggle('selected');
    } else if (selectedBalls.length < game['max-number']) {
      selectBall(ballClicked);
      event.currentTarget.classList.toggle('selected');
    } else {
      showNotificationError(textsNotification.maxNum);
    }
  };

  const completeGameHandler = () => {
    const allBalls = document.querySelectorAll('[data-js=betBall]');
    const maxNumbersCanSelect = game['max-number'];
    const difBetween = maxNumbersCanSelect - selectedBalls.length;
    if (difBetween === 0) {
      showNotificationError(textsNotification.maxNum);
      return;
    }
    const arrayRandomNumbers = getNumbersRandonly(difBetween);
    setBallRandonly(arrayRandomNumbers, allBalls);
  };

  const getNumbersRandonly = (difBetween: number) => {
    let arrayRandomNumbers: number[] = [];
    while (arrayRandomNumbers.length < difBetween) {
      let randomNum = Math.floor(Math.random() * game.range + 1);
      let hasThatRandomNumber = selectedBalls.some(ball => ball === randomNum);
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
          selectBall(num);
        }
      });
    });
  };

  const addToCartHandler = () => {
    if (hasEnoughNumbers() === false) return;

    const newBet = {
      id: new Date().getTime() + Math.random(),
      type: game.type,
      balls: selectedBalls.sort((a, b) => a - b),
      price: game.price,
      color: game.color,
      date: new Date().toLocaleDateString(),
    };
    if (alreadyHasThatBet(newBet) === false) {
      setNewBetState(newBet);
      setShowModalAdd(true);
    } else showNotificationError(textsNotification.sameNums);
  };

  const hasEnoughNumbers = () => {
    const isValid = selectedBalls.length === game['max-number'];

    if (isValid === false) {
      let notification =
        selectedBalls.length === 0
          ? 'Nenhum número selecionado.'
          : textsNotification.notEnoughNum;
      showNotificationError(notification);
      return false;
    } else if (isValid) return true;
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

  useEffect(() => {
    if (confirmAdd && newBetState) {
      addNewBet(newBetState);
      clearBallsSelected();
      setConfirmAdd(false);
    }
  }, [confirmAdd, newBetState, addNewBet, clearBallsSelected]);

  return (
    <>
      {showModalAdd && <ModalConfirm content={contentModalAdd} />}
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
          <ButtonNewBet color={game.color} onClick={addToCartHandler}>
            <ShoppingCartOutlinedIcon />
            &nbsp;Add to cart
          </ButtonNewBet>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default NewBet;

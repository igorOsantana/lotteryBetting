import { useState, createContext, useCallback } from 'react';

import RULES from '../../games.json';

const { types } = RULES;

export interface Bet {
  id: number;
  type: string;
  balls: number[];
  price: number;
  color: string;
  date: string;
}

interface RuleProps {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

interface CartContextProps {
  game: RuleProps;
  selectedBalls: number[];
  bets: Bet[];
  totalPrice: number;
  selectGame: (game: RuleProps) => void;
  selectBall: (ball: number) => void;
  updateBalls: (balls: number[]) => void;
  clearBalls: () => void;
  addNewBet: (bet: Bet) => void;
  removeBetById: (id: number, price: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

const CarContextProvider: React.FC = ({ children }) => {
  const [game, setGame] = useState(types[0]);
  const [selectedBalls, setSelectedBalls] = useState<number[]>([]);
  const [bets, setBets] = useState<Bet[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectGame = (game: RuleProps) => {
    setGame(game);
  };

  const selectBall = (ball: number) => {
    setSelectedBalls(currentBalls => [...currentBalls, ball]);
  };

  const updateBalls = (balls: number[]) => {
    setSelectedBalls(balls);
  };

  const clearBalls = useCallback(() => {
    setSelectedBalls([]);
  }, []);

  const addNewBet = useCallback((bet: Bet) => {
    setBets(currentBets => [...currentBets, bet]);
    setTotalPrice(currentAmount => (currentAmount += bet.price));
  }, []);

  const removeBetById = useCallback(
    (id: number, price: number) => {
      const betsUpdated = bets.filter(bet => bet.id !== id);
      setBets(betsUpdated);
      setTotalPrice(currentPrice => currentPrice - price);
    },
    [bets]
  );

  const valuesContext: CartContextProps = {
    game,
    selectedBalls,
    bets,
    totalPrice,
    selectGame,
    selectBall,
    updateBalls,
    clearBalls,
    addNewBet,
    removeBetById,
  };

  return (
    <CartContext.Provider value={valuesContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CarContextProvider;

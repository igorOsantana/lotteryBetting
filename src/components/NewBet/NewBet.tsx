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

const NewBet: React.FC = () => {
  return (
    <Container>
      <Title>
        NEW BET<span>FOR MEGA-SENA</span>
      </Title>
      <Filters>
        <p>Choose a game</p>
        <div>
          <ButtonFilter>Lotofácil</ButtonFilter>
          <ButtonFilter>Mega-Sena</ButtonFilter>
          <ButtonFilter>Lotomania</ButtonFilter>
        </div>
      </Filters>
      <Description>
        <span>Fill your bet</span>
        <p>
          Escolha 15 números para apostar na lotofácil. Você ganha acertando 11,
          12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você
          joga de onde estiver!
        </p>
      </Description>
      <BallsContainer>
        <Ball>01</Ball>
        <Ball>02</Ball>
        <Ball>03</Ball>
        <Ball>04</Ball>
        <Ball>05</Ball>
        <Ball>01</Ball>
        <Ball>02</Ball>
        <Ball>03</Ball>
        <Ball>04</Ball>
        <Ball>05</Ball>
        <Ball>01</Ball>
        <Ball>02</Ball>
        <Ball>03</Ball>
        <Ball>04</Ball>
        <Ball>05</Ball>
        <Ball>01</Ball>
        <Ball>02</Ball>
        <Ball>03</Ball>
        <Ball>04</Ball>
        <Ball>05</Ball>
      </BallsContainer>
      <ButtonsContainer>
        <div>
          <ButtonNewBet>Complete game</ButtonNewBet>
          <ButtonNewBet>Clear game</ButtonNewBet>
        </div>
        <ButtonNewBet>
          <ShoppingCartOutlinedIcon />
          &nbsp;Add to cart
        </ButtonNewBet>
      </ButtonsContainer>
    </Container>
  );
};

export default NewBet;

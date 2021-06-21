import styled from 'styled-components';

export const Container = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  margin: 3.5rem auto;
  width: 70%;

  @media (max-width: 720px) {
    flex-direction: column;
    margin: 1.5rem auto;
  }

  h2 {
    color: ${({ theme }) => theme.grayLight};
    margin-right: 2.5rem;

    @media (max-width: 720px) {
      margin-right: auto;
      font-size: 1.25rem;
    }
  }
  span {
    font-family: sans-serif;
    color: ${({ theme }) => theme.grayWhite};
    margin-right: 1rem;

    @media (max-width: 720px) {
      margin: 1rem auto;
    }
  }
  button {
    @media (max-width: 720px) {
    }
  }
  .newBet {
    margin-left: auto;

    @media (max-width: 720px) {
      position: absolute;
      right: 0;
    }
  }
`;

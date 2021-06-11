import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  margin: 3.5rem auto;
  height: 2rem;
  width: 70%;

  h2 {
    color: ${({ theme }) => theme.grayLight};
    margin-right: 2.5rem;
  }
  span {
    font-family: sans-serif;
    color: ${({ theme }) => theme.grayWhite};
    margin-right: 1rem;
  }
  button:last-child {
    margin-left: auto;
  }
`;

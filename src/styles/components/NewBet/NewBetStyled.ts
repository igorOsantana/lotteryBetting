import styled from 'styled-components';

interface SelectedProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  color: ${({ theme }) => theme.grayLight};
  white-space: nowrap;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    margin-left: 5px;
    color: ${({ theme }) => theme.grayWhite};
    font-weight: 300;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  p {
    color: ${({ theme }) => theme.grayWhite};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  button {
    margin-right: 1.5rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.grayWhite};
  margin-bottom: 1rem;

  span {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const BallsContainer = styled.div<SelectedProps>`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .selected {
    background-color: ${({ color }) => color};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    button {
      margin-right: 1.5rem;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 2rem;
  font-size: 1.25rem;
`;

export const BorderColor = styled.div`
  height: 100%;
  width: 0.5rem;
  margin-right: 1rem;
  border: 1px solid purple;
  border-radius: 10px;
  background-color: purple;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  & :nth-child(1) {
    color: ${({ theme }) => theme.grayLight};
    font-weight: 900;
  }
  & :nth-child(2) {
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.grayWhite};
    white-space: nowrap;
    font-family: sans-serif;
    font-size: small;
  }
  & :nth-child(3) {
    color: purple;
    font-weight: 900;
  }
`;

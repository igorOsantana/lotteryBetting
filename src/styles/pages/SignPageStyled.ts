import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 720px) {
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LeftSection = styled.section`
  width: 35%;
  height: 65%;
  padding: 0 1rem;
  margin-top: 0;

  @media (max-width: 720px) {
    width: min-content;
    height: min-content;
    margin: 1.5rem auto;
  }
`;

export const RightSection = styled.section`
  width: 35%;
  height: 65%;
  max-height: 30rem;
  padding: 0 1rem;
  margin-top: 0;

  @media (max-width: 720px) {
    width: min-content;
  }
  @media (max-width: 480px) {
    button {
      font-size: 1.75rem;
    }
  }
`;

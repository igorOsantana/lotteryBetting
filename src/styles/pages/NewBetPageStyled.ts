import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  padding: 2rem;

  @media (max-width: 720px) {
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem 2rem;
  }
`;

export const LeftSection = styled.section`
  width: 65%;
  height: 65%;
  padding: 0 1rem;
  margin-top: 2.5rem;

  @media (max-width: 720px) {
    width: 100%;
    height: 65%;
    margin-bottom: 3rem;
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const RightSection = styled.section`
  width: 35%;
  min-width: 20rem;
  max-width: 27.5rem;
  max-height: 30rem;
  padding: 0 1rem;
  margin-top: 2.5rem;

  @media (max-width: 720px) {
    width: min-content;
    min-width: min-content;
    height: min-content;
    position: absolute;
    right: 0;
    cursor: pointer;
    margin-top: 0;
  }
  @media (max-width: 540px) {
    h1,
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    position: relative;
    margin-top: 1rem;
  }
`;

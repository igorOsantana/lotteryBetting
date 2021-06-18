import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 70%;
  height: 70vh;
  overflow-y: auto;

  @media (max-width: 720px) {
    height: min-content;
    min-height: 70vh;
  }

  h2 {
    color: ${({ theme }) => theme.grayLight};
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);

    @media (max-width: 720px) {
      position: fixed;
    }
  }
`;

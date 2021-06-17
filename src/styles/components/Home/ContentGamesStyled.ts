import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 70%;
  height: 65vh;
  overflow-y: auto;

  @media (max-width: 720px) {
    height: min-content;
  }

  h2 {
    color: ${({ theme }) => theme.grayLight};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 720px) {
      position: fixed;
    }
  }
`;

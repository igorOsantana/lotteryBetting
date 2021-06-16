import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 70%;
  height: 65vh;
  overflow-y: auto;

  h2 {
    color: ${({ theme }) => theme.grayLight};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

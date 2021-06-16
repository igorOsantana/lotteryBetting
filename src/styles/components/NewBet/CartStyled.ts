import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.grayLight};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  position: relative;
  padding: 1rem 0;
  flex: 1;
  height: 10rem;
  overflow-y: auto;

  p {
    color: ${({ theme }) => theme.grayLight};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.grayWhite};

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.grayLight};
    margin-right: 5px;
  }
`;

export const ButtoSaveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 20%;
`;

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
  font-size: 2rem;
`;

export const Content = styled.div`
  padding: 1rem 0.5rem;
  flex: 1;
  height: 10rem;
  overflow-y: auto;
`;

export const Item = styled.div``;

export const TotalPrice = styled.div`
  font-size: 1.5rem;
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

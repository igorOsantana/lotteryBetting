import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 1rem auto;
`;

export const ButtonDelete = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.grayLight};
  transition: all 0.4s;

  &:hover {
    color: #f00;
  }
`;

export const DataInfo = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-left: 2px solid ${({ color }) => (color ? color : 'black')};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-size: 1rem;
  padding-left: 0.5rem;
`;

export const Numbers = styled.div`
  color: ${({ theme }) => theme.grayWhite};
  font-weight: bold;
`;

export const GameAndPrice = styled.div<Props>`
  margin-top: 0.5rem;
  font-weight: bold;
  color: ${({ color }) => (color ? color : null)};

  span {
    color: ${({ theme }) => theme.grayLight};
    font-weight: 300;
    margin-left: 10px;
  }
`;

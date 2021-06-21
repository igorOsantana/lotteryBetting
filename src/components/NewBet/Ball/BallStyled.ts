import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.grayWhite};
  border: 1px solid ${({ theme }) => theme.grayWhite};
  border-radius: 50%;
  margin: 0.2rem;
  transition: all 0.4s;

  @media (max-width: 540px) {
    width: 2rem;
    height: 2rem;
  }
  @media (hover: hover) {
    &:hover {
      filter: brightness(50%);
    }
  }

  &:active {
    filter: brightness(50%);
  }
`;

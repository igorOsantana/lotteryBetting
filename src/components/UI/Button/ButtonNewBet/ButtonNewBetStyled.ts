import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  background: transparent;
  color: ${({ color }) => (color ? color : 'green')};
  border: 1px solid ${({ color }) => (color ? color : 'green')};
  border-radius: 10px;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  transition: all 0.4s;

  @media (hover: hover) {
    &:hover {
      color: #fff;
      background-color: ${({ color }) => (color ? color : 'green')};
    }
  }

  &:active {
    color: #fff;
    background-color: ${({ color }) => (color ? color : 'green')};
  }
`;

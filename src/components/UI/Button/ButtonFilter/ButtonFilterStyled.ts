import styled from 'styled-components';

interface ButtonFilterProps {
  color?: string;
  selected?: boolean;
}

export const Button = styled.button<ButtonFilterProps>`
  color: ${({ color, selected }) => (selected ? '#fff' : color)};
  background: ${({ selected, color }) => (selected ? color : 'initial')};
  width: min-content;
  padding: 0.3rem 1rem;
  margin: 2px 5px;
  border: 2px solid ${({ color, theme }) => (color ? color : theme.greenLogo)};
  border-radius: 15px;
  font-weight: 900;
  white-space: nowrap;
  transition: all 0.4s;

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ color, theme }) =>
        color ? color : theme.greenLogo};
      color: #fff;
    }
  }

  &:active {
    background-color: ${({ color, theme }) =>
      color ? color : theme.greenLogo};
    color: #fff;
  }
`;

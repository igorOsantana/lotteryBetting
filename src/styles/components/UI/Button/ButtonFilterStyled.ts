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
  margin: 0.5rem 1rem 0.5rem 0;
  border: 2px solid ${({ color, theme }) => (color ? color : theme.greenLogo)};
  border-radius: 15px;
  font-weight: 900;
  white-space: nowrap;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ color, theme }) =>
      color ? color : theme.greenLogo};
    color: #fff;
  }
`;

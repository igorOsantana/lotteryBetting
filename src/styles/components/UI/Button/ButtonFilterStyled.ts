import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ color, theme }) => (color ? color : theme.greenLogo)};
  background: initial;
  width: min-content;
  height: 2rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
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

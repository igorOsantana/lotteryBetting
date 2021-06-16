import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2rem')};
  font-weight: 700;
  border-style: none;
  white-space: nowrap;
  background: transparent;
  transition: all 0.3s;
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  color: ${({ color, theme }) => (color ? color : theme.greenLogo)};

  &:hover {
    transform: scale(1.05);
  }
`;

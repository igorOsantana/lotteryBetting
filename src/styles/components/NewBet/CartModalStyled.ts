import styled, { keyframes } from 'styled-components';

interface ModalProps {
  show?: boolean;
  color?: string;
}

const slideIn = keyframes`
    from { 
        opacity: 0;
        top: -50vh;
    }
    to { 
        opacity: 1;
        top: 30vh;
    }
`;
const slideOut = keyframes`
    from { 
        opacity: 1;
        top: 30vh;
    }
    to { 
        opacity: 0; 
        top: -50vh;
    }
`;

export const Container = styled.main<ModalProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 50%;
  transform: translate(50%, -20%);
  border: 3px solid ${({ theme }) => theme.grayLight};
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 100;
  width: 50%;
  min-width: 20rem;
  height: min-content;
  background-color: ${({ theme }) => theme.bgBody};
  color: ${({ theme }) => theme.grayLight};
  animation: ${({ show }) => (show ? slideIn : slideOut)} 0.5s forwards ease-out;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
`;

export const Body = styled.div`
  padding: 2rem 1.5rem;
  font-size: 1.25rem;
`;

export const Footer = styled.footer`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderLight};
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button<ModalProps>`
  color: #fff;
  background-color: ${({ color, theme }) => (color ? color : theme.grayLight)};
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 10px;
  border-style: none;
  transition: all 0.4s;

  &:hover {
    filter: brightness(75%);
  }
`;

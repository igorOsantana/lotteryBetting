import styled, { keyframes } from 'styled-components';

const errorShake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

interface Props {
  hasError: boolean;
}

export const InputContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #f00;
  text-align: end;

  & span {
    animation: ${errorShake} 0.4s ease-in-out alternate;
    font-size: small;
    font-weight: bold;
    margin-top: 0.5rem;
    margin-right: 1rem;
  }

  input {
    align-self: stretch;
    height: 2.5rem;
    border-style: none;
    border-bottom: 1px solid
      ${({ theme, hasError }) => (hasError ? '#f00' : theme.borderLight)};
    padding: 2rem;
    outline: none;
    transition: all 0.4s;

    &:focus {
      border-bottom: 1px solid ${props => props.theme.greenLogo};
      &::placeholder {
        color: ${props => props.theme.greenLogo};
      }
    }
    &::placeholder {
      font-weight: bold;
      color: ${({ theme, hasError }) => (hasError ? '#f00' : theme.grayLight)};
    }
  }
`;

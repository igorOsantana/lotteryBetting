import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.grayLight};
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 10px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  background-color: ${props => props.theme.white};

  input {
    align-self: stretch;
    margin-top: 0.5rem;
    height: 2.5rem;
    border-style: none;
    border-bottom: 1px solid ${props => props.theme.borderLight};
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
    }
  }
  a {
    font-family: sans-serif;
    align-self: flex-end;
    margin: 1rem 2rem;
    border-style: none;
    background-color: inherit;
    color: ${props => props.theme.borderLight};
    transition: color 0.4s;

    &:hover {
      color: ${({ theme }) => theme.grayWhite};
    }
  }
  button {
    margin: 2rem auto;
  }
`;

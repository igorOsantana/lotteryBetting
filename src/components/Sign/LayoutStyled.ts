import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.grayLight};
    font-size: 2rem;
  }
  button {
    margin: 2rem auto;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18rem;
  border: 1px solid ${props => props.theme.borderLight};
  border-radius: 10px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 0.3rem 0;
  background-color: #fff;

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
`;

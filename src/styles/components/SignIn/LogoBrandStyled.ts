import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.grayLight};
  height: 80%;

  p {
    width: 40%;
    margin: 1rem 0;
    padding: 0.3rem;
    color: #fff;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.greenLogo};
    border-radius: 20px;
    background-color: ${props => props.theme.greenLogo};
  }
  h1 {
    font-size: 4.5rem;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
    justify-content: center;

    h1 {
      font-size: 2rem;
    }
    p {
      margin: 0.5rem 0;
      padding: 0;
    }
  }
  @media (max-width: 480px) {
    font-size: 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

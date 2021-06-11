import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.grayLight};

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
`;

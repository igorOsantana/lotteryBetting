import styled from 'styled-components';

export const ContentForm = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 10px;
  width: 30rem;
  padding: 0.5rem 0;
  margin: 0.5rem;

  @media (max-width: 540px) {
    width: 20rem;
  }

  button {
    margin: 1.5rem auto;
  }
`;

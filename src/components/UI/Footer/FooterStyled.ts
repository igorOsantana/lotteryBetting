import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 4rem;
  font-size: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.borderLight};
  margin-top: 1.5rem;
`;

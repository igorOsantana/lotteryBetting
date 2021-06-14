import styled from 'styled-components';

interface Props {
  page?: string;
}

export const Container = styled.main<Props>`
  display: flex;
  justify-content: space-evenly;
  align-items: ${({ page }) => (page === 'sign' ? 'center' : 'flex-start')};
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LeftSection = styled.section<Props>`
  width: ${({ page }) => (page === 'sign' ? '30%' : '55%')};
  height: 65%;
  margin-top: 2.5rem;
`;

export const RightSection = styled.section`
  width: 25%;
  height: 65%;
  margin-top: 2.5rem;
`;

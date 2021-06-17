import styled from 'styled-components';

interface LayoutProps {
  page?: string;
}

export const Container = styled.main<LayoutProps>`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: ${({ page }) => (page === 'sign' ? 'center' : 'flex-start')};
  width: 100%;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 720px) {
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const LeftSection = styled.section<LayoutProps>`
  width: ${({ page }) => (page === 'sign' ? '35%' : '65%')};
  height: 65%;
  padding: 0 1rem;
  margin-top: ${({ page }) => (page === 'sign' ? '0' : '2.5rem')};

  @media (max-width: 720px) {
    height: ${({ page }) => (page === 'sign' ? 'min-content' : '65%')};
  }
`;

export const RightSection = styled.section<LayoutProps>`
  width: 35%;
  height: 65%;
  max-height: 30rem;
  padding: 0 1rem;
  margin-top: ${({ page }) => (page === 'sign' ? '0' : '2.5rem')};
`;

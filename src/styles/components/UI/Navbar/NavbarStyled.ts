import styled from 'styled-components';

interface NavListProps {
  isHome?: boolean;
}

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.grayLight};
`;

export const Logo = styled.p`
  font-size: 2.5rem;
  border-bottom: 5px solid ${({ theme }) => theme.greenLogo};
  border-radius: 5px;
  float: left;
  padding: 10px 0;
`;

export const NavList = styled.ul<NavListProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: ${({ isHome }) => (isHome ? 1 : 0)};
  flex-wrap: nowrap;
  list-style-type: none;

  .showHomeLink {
    margin-right: auto;
    margin-left: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      filter: brightness(150%);
    }
    &:active {
      color: ${({ theme }) => theme.greenLogo};
    }
  }
`;

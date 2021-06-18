import styled from 'styled-components';

interface NavProps {
  isHome?: boolean;
  isMobile?: boolean;
}

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
`;

export const Content = styled.div<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.grayLight};

  @media (max-width: 540px) {
    ${({ isMobile }) =>
      isMobile
        ? `position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index:10; align-items: flex-start; background-color: #fff;`
        : null}
  }
`;

export const Logo = styled.p<NavProps>`
  font-size: 2.5rem;
  border-bottom: 5px solid ${({ theme }) => theme.greenLogo};
  border-radius: 5px;
  float: left;
  padding: 10px 0;

  @media (max-width: 540px) {
    ${({ isMobile }) => (isMobile ? `display: none;` : null)}
  }
`;

export const NavList = styled.ul<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: ${({ isHome }) => (isHome ? 1 : 0)};
  flex-wrap: nowrap;
  list-style-type: none;

  @media (max-width: 540px) {
    display: ${({ isMobile }) => (isMobile ? `block;` : 'none')};
    ${({ isMobile }) =>
      isMobile
        ? `font-size: 2.5rem; position:absolute; left:50%; top:35%;transform: translateX(-50%);`
        : null}
  }

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

    @media (max-width: 540px) {
      margin-bottom: 2rem;

      svg {
        font-size: 2rem;
      }
    }

    &:hover {
      filter: brightness(150%);
    }
    &:active {
      color: ${({ theme }) => theme.greenLogo};
    }
  }
`;

export const NavToggle = styled.div<NavProps>`
  width: 40px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
  display: none;

  @media (max-width: 540px) {
    ${({ isMobile }) =>
      isMobile ? `position: absolute; top: 15px; right: 5rem;` : null}
    display: block;
  }

  .one,
  .two,
  .three {
    background-color: ${({ theme }) => theme.grayLight};
    height: 4px;
    width: 100%;
    margin: 5px auto;
    transition-duration: 0.3s;
  }
  .one {
    ${({ isMobile }) =>
      isMobile ? `transform: rotate(45deg) translate(7px, 6px);` : null}
  }
  .two {
    ${({ isMobile }) => (isMobile ? `opacity:0;` : null)}
  }
  .three {
    ${({ isMobile }) =>
      isMobile ? `transform: rotate(-45deg) translate(7px, -7px);` : null}
  }
`;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import ArrowForward from '@material-ui/icons/ArrowForward';
import {
  Container,
  Content,
  Logo,
  NavList,
} from '../../../styles/components/UI/Navbar/NavbarStyled';

const Navbar: React.FC = props => {
  const [showHomeLink, setShowHomeLink] = useState(false);
  const { pathname } = useLocation();
  const currentUrl = pathname;

  useEffect(() => {
    if (currentUrl === '/new-bet') setShowHomeLink(true);
    else setShowHomeLink(false);
  }, [currentUrl]);
  return (
    <>
      <Container>
        <Content>
          <Logo>TGL</Logo>
          <NavList isHome={showHomeLink}>
            {showHomeLink && (
              <li className='showHomeLink'>
                <Link to='/'>Home</Link>
              </li>
            )}
            <li>Account</li>
            <li>
              Sair&nbsp;
              <ArrowForward fontSize='small' />
            </li>
          </NavList>
        </Content>
      </Container>
      {props.children}
    </>
  );
};

export default Navbar;

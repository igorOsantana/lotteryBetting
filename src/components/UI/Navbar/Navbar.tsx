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
import { useContext } from 'react';
import { AuthContext } from '../../../context/Auth/AuthContext';

const Navbar: React.FC = props => {
  const [showHomeLink, setShowHomeLink] = useState(false);
  const currentUrl = useLocation().pathname;
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    if (currentUrl === '/new-bet') setShowHomeLink(true);
    else setShowHomeLink(false);
  }, [currentUrl]);

  const logOutHandler = () => {
    signOut();
  };

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
            <li onClick={logOutHandler}>
              Log&nbsp;out&nbsp;
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

import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth/AuthContext';

import ArrowForward from '@material-ui/icons/ArrowForward';
import {
  Container,
  Content,
  Logo,
  NavList,
  NavToggle,
} from '../../../styles/components/UI/Navbar/NavbarStyled';

const Navbar: React.FC = props => {
  const [showHomeLink, setShowHomeLink] = useState(false);
  const [showNavToggle, setShowNavToggle] = useState(false);
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
        <Content isMobile={showNavToggle}>
          <Logo isMobile={showNavToggle}>TGL</Logo>
          <NavList isMobile={showNavToggle} isHome={showHomeLink}>
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
          <NavToggle
            isMobile={showNavToggle}
            onClick={() => setShowNavToggle(prevState => !prevState)}
          >
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </NavToggle>
        </Content>
      </Container>
      {props.children}
    </>
  );
};

export default Navbar;

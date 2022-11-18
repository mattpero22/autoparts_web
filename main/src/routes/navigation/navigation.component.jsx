import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
         
        </NavLinks>
       
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
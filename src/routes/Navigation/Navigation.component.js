import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon.component';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component';

import { signOutUser } from '../../utils/firebase/firebase';

import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser
            ? <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            : <NavLink to='/auth'>
                SIGN IN
              </NavLink>
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from  '../../assets/crown.svg';
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { SignOutUser } from "../../utils/firebase/firebase.utils";

import { 
  NavigationContainer, 
  NavLinks, 
  NavLink, 
  LogoContainer 
} from './navigation.styles';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className="logo" />
            </LogoContainer>          
            <NavLinks>
                <NavLink className="nav-link" to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={SignOutUser}>
                      SIGN OUT
                    </NavLink>
                  ) : (
                    <NavLink to='/auth'>
                      SIGN IN 
                    </NavLink>
                  )}
                  <CartIcon />                 
            </NavLinks>            
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;
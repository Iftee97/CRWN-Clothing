import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

// firebase imports
import { auth } from '../../utils/firebase/firebase.utils'
import { signOut } from 'firebase/auth'

// styles and icons
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.js'
import CrwnLogo from '../../assets/crown.svg'

// components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

export default function Navigation() {
  const { user, dispatch } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  async function handleSignOut() {
    try {
      await signOut(auth)
      dispatch({ type: 'LOGOUT' })
    } catch (error) {
      console.error('Error Signing Out! >>>>>>>>>>>', error)
    }
  }

  return (
    <NavigationContainer>
      <LogoContainer to='/'>
        <img
          src={CrwnLogo}
          alt='Crwn logo'
          className='logo'
        />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>
          SHOP
        </NavLink>
        {user ? (
          <>
            <NavLink as='span' onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
            <NavLink as='span'>
              {user.displayName && (
                <>
                  Welcome, {' '}
                  <span style={{ fontWeight: 600 }}>
                    {user.displayName}
                  </span>
                </>
              )}
            </NavLink>
          </>
        ) : (
          <NavLink to='/auth'>
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </NavLinks>
    </NavigationContainer>
  )
}

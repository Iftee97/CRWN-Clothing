import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'

import { auth } from '../../utils/firebase/firebase.utils'
import { signOut } from 'firebase/auth'

import './navigation.styles.scss'
import CrwnLogo from '../../assets/crown.svg'

export default function Navigation() {
  const { user, dispatch } = useContext(UserContext)

  async function handleSignOut() {
    try {
      await signOut(auth)
      dispatch({ type: 'LOGOUT' })
    } catch (error) {
      console.error('Error Signing Out! >>>>>>>>>>>', error)
    }
  }

  return (
    <nav className='navigation'>
      <Link to='/' className='logo-container'>
        <img
          src={CrwnLogo}
          alt='Crwn logo'
          className='logo'
        />
      </Link>
      <div className='nav-links-container'>
        <Link to='/shop' className='nav-link'>
          SHOP
        </Link>
        {user ? (
          <>
            <span className='nav-link' onClick={handleSignOut}>
              SIGN OUT
            </span>
            <span className='nav-link'>
              {user.displayName && (
                <>
                  Welcome, {' '}
                  <span className='nav-link--displayName'>
                    {user.displayName}
                  </span>
                </>
              )}
            </span>
          </>
        ) : (
          <Link to='/auth' className='nav-link'>
            SIGN IN
          </Link>
        )}
      </div>
    </nav >
  )
}

import { Link } from 'react-router-dom'

import './navigation.styles.scss'
import CrwnLogo from '../../assets/crown.svg'

export default function Navigation() {
  return (
    <nav className='navigation'>
      <Link className='logo-container' to='/'>
        <img
          src={CrwnLogo}
          alt='Crwn logo'
          className='logo'
        />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </nav>
  )
}

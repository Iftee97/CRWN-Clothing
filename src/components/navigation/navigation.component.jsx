import { Link } from 'react-router-dom'

import './navigation.styles.scss'
import CrwnLogo from '../../assets/crown.svg'

export default function Navigation() {
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
        <Link to='/sign-in' className='nav-link'>
          SIGN IN
        </Link>
      </div>
    </nav>
  )
}

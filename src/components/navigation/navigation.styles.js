import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`

export const LogoContainer = styled(Link)`
  padding: 24px;
`

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

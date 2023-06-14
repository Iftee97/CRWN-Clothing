import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

export default function CartDropdown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  function redirectToCheckout() {
    navigate('/checkout')
    setIsCartOpen(false)
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={redirectToCheckout}>
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} cartItem={cartItem} />
        ))}
      </div>
      <Button>
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

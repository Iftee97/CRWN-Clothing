import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.js'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => navigate('/checkout')}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  )
}

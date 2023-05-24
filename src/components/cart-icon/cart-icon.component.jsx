import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './cart-icon.styles.js'
import ShoppingBagIcon from '../../assets/shopping-bag.svg'

export default function CartIcon() {
  const {
    isCartOpen,
    setIsCartOpen,
    getCartItemsCount
  } = useContext(CartContext)

  function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon src={ShoppingBagIcon} alt='shopping bag icon' />
      <ItemCount>
        {getCartItemsCount()}
      </ItemCount>
    </CartIconContainer>
  )
}

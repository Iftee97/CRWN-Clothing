import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'
import ShoppingBagIcon from '../../assets/shopping-bag.svg'

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, getCartItemsCount } = useContext(CartContext)

  function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div
      className='cart-icon-container'
      onClick={toggleCart}
    >
      <img
        src={ShoppingBagIcon}
        alt='shopping bag icon'
        className='shopping-icon'
      />
      <span className='item-count'>
        {getCartItemsCount()}
      </span>
    </div>
  )
}

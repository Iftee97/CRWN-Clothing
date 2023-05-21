import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

export default function Checkout() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart
  } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      {cartItems.map((cartItem, index) => (
        <div key={cartItem.id || index}>
          <h2>
            {cartItem.name}
          </h2>
          <span>
            {cartItem.quantity}
          </span>
          <br />
          <span onClick={() => increaseQuantity(cartItem)}>
            increment
          </span>
          <br />
          <span onClick={() => decreaseQuantity(cartItem)}>
            decrement
          </span>
          <br />
          <span onClick={() => removeItemFromCart(cartItem)}>
            remove item
          </span>
        </div>
      ))}
    </div>
  )
}

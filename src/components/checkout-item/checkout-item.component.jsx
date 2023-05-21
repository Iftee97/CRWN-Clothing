import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem

  const {
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useContext(CartContext)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>
        {name}
      </span>
      <span className='quantity'>
        {quantity}
      </span>
      <span className='price'>
        ${price}
      </span>
      <div
        className='remove-button'
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

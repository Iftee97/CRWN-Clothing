import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

export default function Checkout() {
  const { cartItems, getCartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      {cartItems.length > 0 ? (
        <>
          <div className='checkout-header'>
            <div className="header-block">
              <span>
                Product
              </span>
            </div>
            <div className="header-block">
              <span>
                Description
              </span>
            </div>
            <div className="header-block">
              <span>
                Quantity
              </span>
            </div>
            <div className="header-block">
              <span>
                Price
              </span>
            </div>
            <div className="header-block">
              <span>
                Remove
              </span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <span className='total'>
            Total: ${getCartTotal()}
          </span>
        </>
      ) : (
        <span className='empty-message'>
          Your cart is empty.
        </span>
      )}
    </div>
  )
}

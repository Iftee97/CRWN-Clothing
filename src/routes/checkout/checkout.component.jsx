import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyMessage
} from './checkout.styles.js'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

export default function Checkout() {
  const { cartItems, getCartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      {cartItems.length > 0 ? (
        <>
          <CheckoutHeader>
            <HeaderBlock>
              <span>
                Product
              </span>
            </HeaderBlock>
            <HeaderBlock>
              <span>
                Description
              </span>
            </HeaderBlock>
            <HeaderBlock>
              <span>
                Quantity
              </span>
            </HeaderBlock>
            <HeaderBlock>
              <span>
                Price
              </span>
            </HeaderBlock>
            <HeaderBlock>
              <span>
                Remove
              </span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>
            Total: ${getCartTotal()}
          </Total>
        </>
      ) : (
        <EmptyMessage>
          Your cart is empty.
        </EmptyMessage>
      )}
    </CheckoutContainer>
  )
}

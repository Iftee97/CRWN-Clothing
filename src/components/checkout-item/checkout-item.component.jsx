import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  Arrow,
  ItemValue,
  ItemPrice,
  RemoveButton,
} from './checkout-item.styles.js'

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem

  const {
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useContext(CartContext)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </Arrow>
        <ItemValue>{quantity}</ItemValue>
        <Arrow onClick={() => increaseQuantity(cartItem)}>
          &#10095;
        </Arrow>
      </ItemQuantity>
      <ItemPrice>${price}</ItemPrice>
      <RemoveButton onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

import {
  CartItemContainer,
  ItemDetails,
  ItemName
} from './cart-item.styles.js'

export default function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

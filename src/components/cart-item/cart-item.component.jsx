import './cart-item.styles.scss'

export default function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} className='item-image' />
      <div className='item-details'>
        <span className='name'>
          {name}
        </span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

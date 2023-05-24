import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

export default function ProductCard({ product }) {
  const { imageUrl, name, price } = product

  const { addItemToCart } = useContext(CartContext)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>
          {name}
        </span>
        <span className='price'>
          ${price}
        </span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add to cart
      </Button>
    </div>
  )
}

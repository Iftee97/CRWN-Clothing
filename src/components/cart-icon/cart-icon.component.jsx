import './cart-icon.styles.scss'
import ShoppingBagIcon from '../../assets/shopping-bag.svg'

export default function CartIcon() {
  return (
    <div className='cart-icon-container'>
      <img
        src={ShoppingBagIcon}
        alt='shopping bag icon'
        className='shopping-icon'
      />
      <span className='item-count'>0</span>
    </div>
  )
}

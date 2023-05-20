import { useContext } from 'react'
import './shop.styles.scss'
import { ProductsContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/product-card.component'

export default function Shop() {
  const { products } = useContext(ProductsContext)
  console.log('products: >>>>>>>>>', products)

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

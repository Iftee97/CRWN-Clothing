import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import './category.styles.scss'

export default function Category() {
  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)
  console.log('categories (category): >>>>>>>>>>', categories)
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (categories?.length > 0) {
      const c = categories.find(cat => cat.title === category)
      setProducts(c.items)
    }
  }, [categories, category])

  useEffect(() => {
    if (products?.length > 0) {
      console.log('products (category): >>>>>>>>>>', products)
    }
  }, [products])

  return (
    <>
      <h2 className='category-title'>
        {category.toUpperCase()}
      </h2>
      <div className='category-container'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

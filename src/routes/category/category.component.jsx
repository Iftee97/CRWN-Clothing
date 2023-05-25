import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, CategoryTitle } from './category.styles.js'

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
      <CategoryTitle>
        {category.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </>
  )
}

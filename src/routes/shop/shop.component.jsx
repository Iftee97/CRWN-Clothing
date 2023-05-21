import { useContext } from 'react'
import './shop.styles.scss'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import CategoryPreview from '../../components/category-preview/category-preview.component'

export default function Shop() {
  const { categories } = useContext(CategoriesContext)
  console.log('categories: >>>>>>>>>', categories)

  return (
    <div className='shop-container'>
      {categories?.length > 0 ? (
        <>
          {categories.map((category) => (
            <CategoryPreview
              key={category.title}
              title={category.title}
              products={category.items}
            />
          ))}
        </>
      ) : (
        <h2>
          Loading...
        </h2>
      )}
    </div>
  )
}

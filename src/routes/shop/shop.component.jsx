import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import './shop.styles.scss'

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

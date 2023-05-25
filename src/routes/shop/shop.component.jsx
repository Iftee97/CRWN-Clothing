import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { ShopContainer, LoadingText } from './shop.styles.js'

export default function Shop() {
  const { categories } = useContext(CategoriesContext)
  console.log('categories: >>>>>>>>>', categories)

  return (
    <ShopContainer>
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
        <LoadingText>
          Loading...
        </LoadingText>
      )}
    </ShopContainer>
  )
}

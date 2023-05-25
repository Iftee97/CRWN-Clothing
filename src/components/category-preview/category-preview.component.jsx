import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles.js'

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`/shop/${title}`}>
          {title.toUpperCase()}
        </Link>
      </Title>
      <Preview>
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

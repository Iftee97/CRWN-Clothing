import { Link, useNavigate } from 'react-router-dom'
import './category-item.styles.scss'

export default function CategoryItem({ category }) {
  const navigate = useNavigate()

  return (
    <div
      className="category-item-container"
      onClick={() => navigate(`/shop/${category.title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>
          {category.title}
        </h2>
        <p>
          Shop Now
        </p>
      </div>
    </div>
  )
}

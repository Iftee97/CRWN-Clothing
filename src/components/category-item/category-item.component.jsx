import './category-item.styles.scss'

export default function CategoryItem({ category }) {
  return (
    <div className="category-container">
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

import { useNavigate } from 'react-router-dom'
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBodyContainer
} from './directory-item.styles.js'

export default function DirectoryItem({ category }) {
  const navigate = useNavigate()

  const { title, imageUrl } = category

  return (
    <DirectoryItemContainer onClick={() => navigate(`/shop/${title}`)}>
      <BackgroundImage imageurl={imageUrl} />
      <DirectoryBodyContainer className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  )
}

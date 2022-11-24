import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, onClickChangeImg, selectedImgId} = props
  const {id, thumbnailUrl, thumbnailAltText} = galleryDetails

  const imgClassName = selectedImgId === id ? 'selected' : ''

  const changeImg = () => {
    onClickChangeImg(id)
  }

  const mainEle = (
    <li>
      <button type="button" className="button" onClick={changeImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${imgClassName}`}
        />
      </button>
    </li>
  )

  return mainEle
}

export default ThumbnailItem

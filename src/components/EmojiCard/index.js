import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onEmoji} = props
  const onClickEmoji = () => {
    onEmoji(eachEmoji.id)
  }
  return (
    <li className="emoji-item-container">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img
          src={eachEmoji.emojiUrl}
          alt={eachEmoji.emojiName}
          className="emoji-img"
        />
      </button>
    </li>
  )
}
export default EmojiCard

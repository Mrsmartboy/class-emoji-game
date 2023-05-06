import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {emojiPresentList: [], topScore: 0, isGameProcess: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderTopScore = newScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (newScore > topScore) {
      newTopScore = newScore
    }

    this.setState({topScore: newTopScore, isGameProcess: false})
  }

  onEmoji = id => {
    const {emojisList} = this.props
    const {emojiPresentList} = this.state
    const isEmojiPresent = emojiPresentList.includes(id)

    if (isEmojiPresent) {
      this.renderTopScore(emojiPresentList.length)
    } else {
      if (emojisList.length - 1 === emojiPresentList.length) {
        this.renderTopScore(emojiPresentList.length)
      }
      this.setState(prevState => ({
        emojiPresentList: [...prevState.emojiPresentList, id],
      }))
    }
  }

  renderEmojiCard = () => {
    const getRenderedEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {getRenderedEmojisList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
            onEmoji={this.onEmoji}
          />
        ))}
      </ul>
    )
  }

  onResetGame = () => {
    this.setState({isGameProcess: true, emojiPresentList: []})
  }

  render() {
    const {emojiPresentList, topScore, isGameProcess} = this.state
    const {emojisList} = this.props

    return (
      <>
        <NavBar
          topScore={topScore}
          score={emojiPresentList.length}
          isGameProcess={isGameProcess}
        />
        <div className="bg-container">
          {isGameProcess ? (
            this.renderEmojiCard()
          ) : (
            <WinLoseCard
              score={emojiPresentList.length}
              onResetGame={this.onResetGame}
              isWonOrLoss={emojisList.length === emojiPresentList.length}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame

import './index.css'

const WinOrLoseCard = props => {
  const {score, onResetGame, isWonOrLoss} = props

  const imgUrl = isWonOrLoss
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-container">
      <div className="result-container">
        <h1 className="result">{isWonOrLoss ? 'You Won' : 'You Lose'}</h1>
        <p className="compliment">{isWonOrLoss ? 'Best Score' : 'Score'}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-again" onClick={onResetGame}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard

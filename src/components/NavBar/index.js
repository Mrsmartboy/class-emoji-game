// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameProcess} = props

  return (
    <nav className="nav-container">
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="nav-name">Emoji Game</h1>
      </div>
      {isGameProcess && (
        <div className="nav-items">
          <p className="item">Score: {score}</p>
          <p className="item">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar

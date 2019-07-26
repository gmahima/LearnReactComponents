import React, {PureComponent} from 'react';
import Counter from './Counter'

class Player extends PureComponent{
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired;
    id: PropTypes.number.isRequired;
    score: PropTypes.number.isRequired;
  }
  render() {
    const {
      name,
      id,
      removePlayer,
      score,
      changeScore,
      index,
      isHighScore
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
        <HighScoreTracker isHighScore={isHighScore}/>

        <Counter score={score}
                 changeScore={changeScore}
                 index={index}/>
      </div>
    );
  }

}

export default Player;

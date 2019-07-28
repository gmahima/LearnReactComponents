import React, {PureComponent} from 'react';
import Counter from './Counter'
import {Consumer} from './Context'

class Player extends PureComponent{
  static propTypes = {
    name: PropTypes.string.isRequired;
    id: PropTypes.number.isRequired;
    score: PropTypes.number.isRequired;
  }
  render() {
    const {
      name,
      id,
      score,
      index,
      isHighScore
    } = this.props
    return (
      <Consumer>
        {
          context => (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                { name }
              </span>
              <HighScoreTracker isHighScore={isHighScore}/>

              <Counter score={score}
                       index={index}/>
            </div>
          )
        }

      </Consumer>


    );
  }

}

export default Player;

import React, {Component} from 'react';
import {Provider} from './Context'


import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
        isHighScore: false
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        isHighScore: false
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        isHighScore: false
      },
      {
        name: "James",
        id: 4,
        score: 0,
        isHighScore: false
      }
    ]
  };
  let prevId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...this.state.players, {
            name,
            score: 0,
            id: this.prevId+=1,
            isHighScore: false
          }
        ]
      }

    })
  }
  changeScore = (index, delta) => {
    this.setState( prevState => {
      return{
        players: prevState.players[index].score+=delta
      }
    });
    console.log(delta);
  }
  handleHighScore = () => {
    let players = this.state.players;
    let highScore = Math.max.apply(Math,array.map(o => o.score))
    let highScorePlayers = players.filter(obj => {
      return obj.score === highScore;
    })
    for(player of highScorePlayers) {
      this.setState(prevState => {
        return{
          isHighScore: true
        }
      })
    }

  }


  render() {
    return (
      <Provider value={
        players: this.state.players,
        actions: {
          changeScore: this.state.changeScore,
          removePlayer: this.state.handleRemovePlayer,
          addPlayer:this.state.handleAddPlayer
        }
      }>
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          {this.state.players.map( (player, index) =>
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              isHighScore={this.isHighScore}
            />
          )}
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;

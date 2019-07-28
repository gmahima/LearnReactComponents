import React from 'react'
import {Consumer} from './Context'

const Stats = () => {


  return (
    <Consumer>
    {  context => {
      let totalScore = context.reduce((total, player) => {return total+player.score}, 0)
      let totalPlayers = context.length;
        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
              </tr>
            </tbody>
          </table>
        )
      }
    }
    </Consumer>

  )
}
export default Stats;

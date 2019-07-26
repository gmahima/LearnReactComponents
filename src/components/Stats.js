import React from 'react'
import PropTypes from 'prop-types'

const Stats = (props) => {
  let totalScore = props.players.reduce((total, player) => {return total+player.score}, 0)


  let totalPlayers = props.players.length;
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
Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}
export default Stats;

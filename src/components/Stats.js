import React from 'react'

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
export default Stats;

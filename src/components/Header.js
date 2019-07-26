import React from 'react';
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({players, totalPlayers, title}) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1>
      <span className="stats">Players: {totalPlayers}</span>
      <Stopwatch />
    </header>
  );
}

export default Header;

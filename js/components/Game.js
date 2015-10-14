import connectToStores from 'alt/utils/connectToStores';
import React, {Component} from 'react';
import GameStore from '../stores/GameStore';
import Character from './Character';

class Game extends Component{
  render() {
    return (
      <div className="game">
        {this.props.GameStore.game.characters.map((c) => {
          // for the game, render out each character
          return ( <Character key={c.name} character={c}/> );
        })}
      </div>
    );
  }
};

export default Game;

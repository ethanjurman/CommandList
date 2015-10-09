import connectToStores from 'alt/utils/connectToStores';
import React, {Component} from 'react';
import GameStore from '../stores/GameStore';

class Game extends Component{
  static getStores() {
    return [GameStore];
  }

  static getPropsFromStores() {
    return GameStore.getState();
  }

  render() {
    return(
      <div>
        <div> {this.props.GameStore.game.characters.map((c) => {
          console.log(c)
          return (
            <div key={c.name}> {c.name} </div>
          )
        })} </div>
      </div>
    );
  }
};

export default Game;

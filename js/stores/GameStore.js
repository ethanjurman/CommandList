import alt from '../alt';
import GameActions from '../actions/GameActions'

class GameStore {
  constructor() {
    this.bindListeners({
      updateGame: GameActions.updateGame
    });

    this.state = {
      game: {name:"",characters:[]}
    };
  }

  updateGame(game) {
    this.setState({ game: game.game });
  }
}

export default alt.createStore(GameStore, 'GameStore');

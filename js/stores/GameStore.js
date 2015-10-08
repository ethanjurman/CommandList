import alt from '../alt'
var GameActions = require('../actions/GameActions');

class GameStore {
  constructor() {
    this.game = "";
    this.bindActions(GameActions);
  }

  onUpdateGame(game) {
    this.game = game;
    console.log(this.game);
    this.errorMessage = null;
  }
}

module.exports = alt.createStore(GameStore, 'GameStore');

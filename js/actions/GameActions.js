import alt from '../alt';

class GameActions {
  updateGame(game) {
    return { game }
  }
}

export default alt.createActions(GameActions);

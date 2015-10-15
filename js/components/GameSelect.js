import Dropdown from 'react-dropdown';
import React, {Component} from 'react';
import HttpRequest from './HttpRequest';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';

export default class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {games:[]};
  }

  componentDidMount() {
    let self = this;
    HttpRequest('/db/games', (response) => {
      // set the state of the selector to the game object
      response = JSON.parse(response);
      self.setState({games:response});
    });
  }

  _onSelect(option) {
    console.log('selected ', option.label, option.value);
    HttpRequest('/db/games/' + option.value, (response) => {
      // set the store of the application to the game object
      GameActions.updateGame(JSON.parse(response));
    });
  }

  render() {
    var defaultOption = { "value": 'None', "label": 'Select Game' };
    return (
      <Dropdown options={this.state.games} onChange={this._onSelect} value={defaultOption} />
    )
  }
};

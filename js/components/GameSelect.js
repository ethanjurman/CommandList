import Dropdown from 'react-dropdown';
import React, {Component} from 'react';
import httpRequest from './httpRequest';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';

export default class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {games:[]};
  }

  componentDidMount() {
    self = this;
    httpRequest('http://localhost:9000/games', (response) => {
      console.log(response);
      self.setState({games:response});
    });
  }

  _onSelect(option) {
    console.log('selected ', option.label, option.value);
    httpRequest('http://localhost:9000/games/' + option.value, (response) => {
      GameActions.updateGame(response);
    });
  }

  render() {
    var defaultOption = { "value": 'None', "label": 'Select Game' };
    return (
      <Dropdown options={this.state.games} onChange={this._onSelect} value={defaultOption} />
    )
  }
};

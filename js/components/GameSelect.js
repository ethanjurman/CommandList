import Dropdown from 'react-dropdown';
import React, {Component} from 'react';

export default class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {games:[]};
  }

  componentDidMount() {
    var self = this;
    var req = new XMLHttpRequest();
    req.open('GET','/games'); // TODO this is ugly
    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        var games = JSON.parse(req.response);
        console.log(games);
        self.setState({games});
      }
    };
    req.send();
  }

  _onSelect(option) {
    console.log('selected ', option.label);
  }

  render() {
    var defaultOption = { "value": 'None', "label": 'Select Game' };
    return (
      <Dropdown options={this.state.games} onChange={this._onSelect} value={defaultOption} />
    )
  }
};

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import AltContainer from 'alt/AltContainer';

import AddGame from './components/AddGame.js';
import EditGame from './components/EditGame.js';
import GameSelect from './components/GameSelect.js';
import Game from './components/Game.js';
import GameStore from './stores/GameStore';


let App = React.createClass({
  render() {
    return (
      <div className="app">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/addGame">Add Game</Link>
          <Link to="/editGame">Edit Game</Link>
          <GameSelect/>
          {this.props.children}
        </div>
        <AltContainer component={Game} stores={{GameStore:GameStore}}/>
      </div>
    );
  }
});

let routes = (
  <Route path="/" component={App}>
    <Route path="/addGame" component={AddGame}/>
    <Route path="/editGame" component={EditGame}/>
  </Route>
);

React.render(<Router>{routes}</Router>, document.body);

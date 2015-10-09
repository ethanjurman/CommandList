import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import AltContainer from 'alt/AltContainer';

import AddGameHandler from './components/AddGame.js';
import EditGameHandler from './components/EditGame.js';
import GameSelectHandler from './components/GameSelect.js';
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
          <GameSelectHandler/>
          {this.props.children}
        </div>
        <AltContainer component={Game} stores={{GameStore:GameStore}}/>
      </div>
    );
  }
});

let routes = (
  <Route path="/" component={App}>
    <Route path="/addGame" component={AddGameHandler}/>
    <Route path="/editGame" component={EditGameHandler}/>
  </Route>
);

React.render(<Router>{routes}</Router>, document.body);

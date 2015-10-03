import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import MakeHandler from './components/Make.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/make">Make</Link>
        {this.props.children}
      </div>
    );
  }
});

let routes = (
  <Route path="/" component={App}>
    <Route path="/make" component={MakeHandler}/>
  </Route>
);

React.render(<Router>{routes}</Router>, document.body);

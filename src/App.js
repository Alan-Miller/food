import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Food from './Food';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Food!</h1>
          <Link to="/">Welcome</Link>
          <Link to="/food">Food</Link>
        </header>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/food" component={Food} />
        </Switch>


      </div>
    );
  }
}

export default App;

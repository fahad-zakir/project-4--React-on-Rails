import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './components/Home'
import CityPage from './components/CityPage'
import SingleActivity from './components/SingleActivity'

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities/:id" component={CityPage} />
            <Route exact path="/cities/:cityId/activities/:id" component={SingleActivity} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

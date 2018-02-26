import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cities from './components/Cities'
import SingleCity from './components/SingleCity'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Cities} />
            <Route path="/:id" component={SingleCity} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App